import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface UseHotkeysOptions {
  onOpenTerminal?: () => void;
  onOpenHotkeyModal?: () => void;
}

export function useHotkeys({ onOpenTerminal, onOpenHotkeyModal }: UseHotkeysOptions = {}) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is currently typing in an input, textarea, or contentEditable element
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      // Check key
      const key = e.key.toUpperCase();

      switch (key) {
        case 'H':
        case '1':
          navigate('/');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'O':
        case 'C':
        case '2':
          navigate('/automation');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'L':
          navigate('/cloud');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'P':
        case '3':
          navigate('/projects');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'S':
        case '4':
          navigate('/skills');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'E':
        case '5':
          navigate('/experience');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'A':
        case '6':
          navigate('/about');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'R':
        case '7':
          navigate('/credentials');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'M':
        case '8':
          const contactEl = document.getElementById('contact');
          if (contactEl) {
            contactEl.scrollIntoView({ behavior: 'smooth' });
          } else {
            navigate('/#contact');
          }
          break;
        case 'T':
          if (onOpenTerminal) {
            e.preventDefault();
            onOpenTerminal();
          }
          break;
        case '?':
        case '/':
          if (onOpenHotkeyModal) {
            e.preventDefault();
            onOpenHotkeyModal();
          } else {
            navigate('/hotkeys');
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, onOpenTerminal, onOpenHotkeyModal]);
}
