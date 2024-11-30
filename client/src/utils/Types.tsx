
export interface AuthContextType  {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
  };

export interface ProtectProps {
  children: React.ReactElement;
}

export interface UserMenuProps {
  isVisible: boolean; 
  onClose: () => void; 
  logout: () => void;
}