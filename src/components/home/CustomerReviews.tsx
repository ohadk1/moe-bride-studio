
import { useState, useEffect } from 'react';
import { Star, StarHalf, Trash2, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Review {
  id: string;
  name: string | null;
  text: string;
  stars: number;
  created_at: string;
}

interface AdminSession {
  isAdmin: boolean;
  loading: boolean;
}

const CustomerReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({ name: '', text: '', stars: 5 });
  const [adminSession, setAdminSession] = useState<AdminSession>({ isAdmin: false, loading: true });
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({ email: '', password: '' });
  const { toast } = useToast();

  // Fetch reviews on component mount
  useEffect(() => {
    fetchReviews();
    checkAdminSession();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      toast({
        title: "שגיאה בטעינת ביקורות",
        description: "אנא נסו שוב מאוחר יותר",
        variant: "destructive"
      });
    }
  };

  const checkAdminSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    // Check if user is logged in and has admin role
    if (session?.user) {
      const { data: { user } } = await supabase.auth.getUser();
      const isAdmin = user?.user_metadata?.role === 'admin';
      setAdminSession({ isAdmin, loading: false });
    } else {
      setAdminSession({ isAdmin: false, loading: false });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  const handleStarClick = (rating: number) => {
    setNewReview(prev => ({ ...prev, stars: rating }));
  };

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginCredentials.email,
        password: loginCredentials.password,
      });

      if (error) throw error;
      
      // Check if user has admin role
      if (data.user?.user_metadata?.role === 'admin') {
        setAdminSession({ isAdmin: true, loading: false });
        setShowLoginForm(false);
        toast({
          title: "התחברת בהצלחה",
          description: "ברוכה הבאה, מורן!",
        });
      } else {
        await supabase.auth.signOut();
        toast({
          title: "אין הרשאות מנהל",
          description: "אין לך הרשאות מנהל מערכת",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "התחברות נכשלה",
        description: "שם משתמש או סיסמה שגויים",
        variant: "destructive"
      });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setAdminSession({ isAdmin: false, loading: false });
    toast({
      title: "התנתקת בהצלחה",
    });
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newReview.text.trim()) {
      toast({
        title: "שגיאה",
        description: "אנא הזן טקסט ביקורת",
        variant: "destructive"
      });
      return;
    }
    
    try {
      const { data, error } = await supabase
        .from('reviews')
        .insert([
          { 
            name: newReview.name.trim() || null, 
            text: newReview.text.trim(), 
            stars: newReview.stars 
          }
        ])
        .select();
      
      if (error) throw error;
      
      // Add the new review to the state
      if (data) {
        setReviews([data[0], ...reviews]);
        setNewReview({ name: '', text: '', stars: 5 });
        toast({
          title: "תודה על הביקורת שלך!",
          description: "הביקורת נוספה בהצלחה",
        });
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      toast({
        title: "שגיאה בשליחת הביקורת",
        description: "אנא נסו שוב מאוחר יותר",
        variant: "destructive"
      });
    }
  };

  const handleDeleteReview = async (id: string) => {
    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      
      // Remove the deleted review from state
      setReviews(reviews.filter(review => review.id !== id));
      toast({
        title: "הביקורת נמחקה בהצלחה",
      });
    } catch (error) {
      console.error('Error deleting review:', error);
      toast({
        title: "שגיאה במחיקת הביקורת",
        description: "אנא נסו שוב מאוחר יותר",
        variant: "destructive"
      });
    }
  };

  // Calculate average rating
  const averageRating = reviews.length 
    ? (reviews.reduce((sum, review) => sum + review.stars, 0) / reviews.length).toFixed(1) 
    : 0;

  return (
    <section className="py-20 bg-brand-cream/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6 relative inline-block">
            <span className="relative z-10">מה לקוחות אומרים עלינו</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-gold/20 -z-0"></span>
          </h2>
          
          {reviews.length > 0 && (
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star}
                    className={`w-5 h-5 ${
                      star <= Math.floor(Number(averageRating))
                        ? 'text-yellow-400 fill-yellow-400'
                        : star - 0.5 <= Number(averageRating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold">{averageRating}</span>
              <span className="text-sm text-gray-600">({reviews.length} ביקורות)</span>
            </div>
          )}
          
          <p className="text-lg text-foreground/80">
            הצטרפו ללקוחות המרוצים שלנו ושתפו את החוויה שלכם
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Review Form */}
          <Card className="lg:col-span-2 shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">השאירו ביקורת</h3>
              <form onSubmit={handleSubmitReview}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      שם (לא חובה)
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={newReview.name}
                      onChange={handleInputChange}
                      placeholder="השם שלך"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="text" className="block text-sm font-medium mb-1">
                      הביקורת שלך
                    </label>
                    <Textarea
                      id="text"
                      name="text"
                      value={newReview.text}
                      onChange={handleInputChange}
                      placeholder="ספרו לנו על החוויה שלכם"
                      rows={4}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      דירוג
                    </label>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <Star
                          key={rating}
                          className={`w-6 h-6 cursor-pointer ${
                            rating <= newReview.stars
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                          onClick={() => handleStarClick(rating)}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-brand-gold hover:bg-brand-gold/90">
                    שליחה
                  </Button>
                </div>
              </form>

              {/* Admin Section */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                {adminSession.isAdmin ? (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-600 font-medium">
                      מחובר כמנהל
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleLogout}
                      className="flex items-center gap-1"
                    >
                      <LogOut className="w-4 h-4" />
                      התנתק
                    </Button>
                  </div>
                ) : (
                  <div>
                    {!showLoginForm ? (
                      <button 
                        onClick={() => setShowLoginForm(true)}
                        className="text-sm text-gray-500 hover:text-gray-700"
                      >
                        כניסת מנהל
                      </button>
                    ) : (
                      <form onSubmit={handleLoginSubmit} className="space-y-3">
                        <h4 className="text-sm font-medium">כניסת מנהל</h4>
                        <Input
                          type="email"
                          name="email"
                          placeholder="אימייל"
                          value={loginCredentials.email}
                          onChange={handleLoginInputChange}
                          required
                        />
                        <Input
                          type="password"
                          name="password"
                          placeholder="סיסמה"
                          value={loginCredentials.password}
                          onChange={handleLoginInputChange}
                          required
                        />
                        <div className="flex gap-2">
                          <Button type="submit" size="sm" variant="secondary">
                            כניסה
                          </Button>
                          <Button 
                            type="button" 
                            size="sm" 
                            variant="outline"
                            onClick={() => setShowLoginForm(false)}
                          >
                            ביטול
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Reviews List */}
          <div className="lg:col-span-3 space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <Card key={review.id} className="shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center mb-1">
                          <div className="flex mr-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${
                                  star <= review.stars
                                    ? 'text-yellow-400 fill-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="font-medium">
                            {review.name || 'לקוח/ה'}
                          </span>
                        </div>
                        <p className="text-gray-700">{review.text}</p>
                        <p className="text-xs text-gray-500 mt-2">
                          {new Date(review.created_at).toLocaleDateString('he-IL')}
                        </p>
                      </div>
                      
                      {adminSession.isAdmin && (
                        <button
                          onClick={() => handleDeleteReview(review.id)}
                          className="text-red-500 hover:text-red-700"
                          aria-label="מחק ביקורת"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>אין ביקורות עדיין. היו הראשונים להשאיר ביקורת!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
