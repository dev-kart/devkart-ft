# Changelog

## [1.0.6] - 2025-08-07

### Fixed

- **Critical:** Resolved React version dependency conflicts
  - Downgraded React from 19.1.0 to 18.3.1 in Next.js template for better compatibility
  - Updated `cmdk` to v1.0.0 (supports React 18+) instead of v0.2.0 (React 18 only)
  - Fixed TypeScript type conflicts by pinning `@types/react` and `@types/react-dom` to compatible versions
  - Added `--legacy-peer-deps` flag to npm install to handle remaining peer dependency warnings

### Improved

- **CLI Experience:** Enhanced error handling and user feedback
  - Added directory existence check before project creation
  - Better error messages with recovery instructions
  - Added helpful next steps and localhost URLs in success message
  - Improved error logging with specific guidance

### Added

- **Dependencies:** Synchronized package versions between templates
  - Added `sonner` toast library to React template for consistency
  - Standardized all Radix UI component versions across templates
  - Updated development dependencies to latest stable versions

### Technical Details

- React 18.3.1 + Next.js 15.1.4 (stable combination)
- All Radix UI components updated to latest stable versions
- TypeScript 5.6.0 with proper React 18 type definitions
- Tailwind CSS 3.4.x for both templates (consistent styling)
- Enhanced color system with 50-900 shades for primary/secondary colors

## [1.0.5] - Previous Release

- Initial template system with Next.js and React support
- ShadCN UI integration
- Basic Tailwind CSS setup
