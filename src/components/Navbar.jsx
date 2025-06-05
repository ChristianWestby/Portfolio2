import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/utils/auth/AuthContext";
import { Menu } from "lucide-react";
import LogoStriped from "@/components/LogoStriped";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md backdrop-blur-sm" : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex items-center justify-between p-4 max-w-screen-xl">
        <Link to="/" className="flex items-center gap-4">
          <LogoStriped />
          <span className="text-lg font-bold tracking-widest uppercase">
            <span className="block -mb-1">Christian</span>
            <span className="block border-t border-b border-current">Westby</span>
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          {isLoggedIn ? (
            <button
              onClick={() => navigate("/profile")}
              className={`rounded-full w-8 h-8 flex items-center justify-center border ${
                user?.venueManager ? "border-orange-500" : "border-gray-300"
              }`}
              title="Min profil"
            >
              <span className="text-sm font-semibold uppercase">
                {user?.name?.[0] || "?"}
              </span>
            </button>
          ) : (
            <Link to="/login" className="text-sm font-medium hover:underline">
              Logg inn
            </Link>
          )}
          <button className="md:hidden">
            <Menu />
          </button>
        </nav>
      </div>
    </header>
  );
}