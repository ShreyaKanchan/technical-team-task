import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Waves, Twitter, Facebook, Instagram, Youtube, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Waves className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Oceanica</span>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">Lifestyle</p>
              <p className="text-muted-foreground">Adventure</p>
              <p className="text-muted-foreground">Tours</p>
              <p className="text-muted-foreground">Community</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Help & Support</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">Help Center</p>
              <p className="text-muted-foreground">Safety</p>
              <p className="text-muted-foreground">Refund a Request</p>
              <p className="text-muted-foreground">Contact & Support</p>
              <p className="text-muted-foreground">FAQ</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Packages & Deals</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">Trending</p>
              <p className="text-muted-foreground">Summer Spots</p>
              <p className="text-muted-foreground">Popular Destinations</p>
              <p className="text-muted-foreground">Last Minute Packages</p>
              <p className="text-muted-foreground">Best Deals</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">Terms & Conditions</p>
              <p className="text-muted-foreground">Privacy Statement</p>
              <p className="text-muted-foreground">Cookie Policy</p>
              <p className="text-muted-foreground">Disclaimer</p>
              <p className="text-muted-foreground">Payment Services</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-foreground mb-2">Sign up to receive 10% off your first package deal</h3>
              <div className="flex gap-2 max-w-md">
                <Input 
                  placeholder="Email Address" 
                  className="bg-input border-border"
                />
                <Button variant="ocean">Submit</Button>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-muted-foreground">
                  I agree to the Terms and Conditions and Privacy Statement. We'll update you on trips and special packages. T&Cs apply.
                </span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Zap className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;