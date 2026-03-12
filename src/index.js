// ============================================================
// 🎨 B-ticket Design System
// Main entry point — import everything from here
//
// Usage:
//   import { buildTokens, ThemeContext, Button, Badge } from './bticket-ds'
// ============================================================

// Tokens
export { palette } from './tokens/palette';
export { brand } from './tokens/brand';
export { themes } from './tokens/themes';
export { typography, spacing, radius, transitions } from './tokens/fixed';
export { buildTokens, tokensToCSSVars } from './tokens';

// Hooks
export { ThemeContext, useTokens } from './hooks';

// Components
export {
  // Form Controls
  Button,
  TextInput,
  Textarea,
  Select,
  Checkbox,
  RadioGroup,
  Toggle,

  // Feedback
  Alert,
  ToastProvider,
  Modal,
  Progress,
  Spinner,
  Skeleton,

  // Data Display
  Avatar,
  Badge,
  DataTable,
  StatsCard,
  Tabs,
  Accordion,

  // Navigation
  NavItem,
  Breadcrumb,
  Pagination,
  Stepper,
  Tooltip,
  Divider,

  // Utility
  ThemeToggle,
  Icon,
  iconNames,
} from './components';
