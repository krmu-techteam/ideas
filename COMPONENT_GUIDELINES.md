# Component Guidelines

## Button Component

### Variants
- **Primary**: Gradient background, white text
- **Secondary**: Outline style, gold border
- **Ghost**: Transparent background, text only
- **Destructive**: Red background for dangerous actions

### Sizes
- **sm**: 32px height, 12px font
- **md**: 40px height, 14px font
- **lg**: 48px height, 16px font

### States
- **Default**: Normal appearance
- **Hover**: Lifted shadow, color shift
- **Active**: Pressed appearance
- **Disabled**: Reduced opacity, no interaction
- **Loading**: Spinner icon, disabled state

## Card Component

### Variants
- **Default**: White background, subtle shadow
- **Elevated**: Larger shadow, hover lift
- **Bordered**: Light border, no shadow
- **Filled**: Colored background

### Content Structure
- **Header**: Title and optional subtitle
- **Body**: Main content area
- **Footer**: Actions or metadata

## Form Components

### Input Field
- **Label**: Required, positioned above
- **Placeholder**: Helpful hint text
- **Error**: Red border and error message
- **Success**: Green border and checkmark
- **Disabled**: Grayed out, no interaction

### Select Dropdown
- **Label**: Required, positioned above
- **Placeholder**: "Select an option"
- **Options**: Clear, readable list
- **Search**: Filterable for long lists

### Checkbox
- **Label**: Positioned to the right
- **Indeterminate**: For partial selection
- **Disabled**: Grayed out state

### Radio Button
- **Label**: Positioned to the right
- **Group**: Related options grouped
- **Disabled**: Grayed out state

## Navigation Components

### Header Navigation
- **Logo**: Left-aligned, clickable
- **Menu**: Center-aligned links
- **Actions**: Right-aligned buttons
- **Mobile**: Hamburger menu

### Breadcrumb
- **Format**: Home > Section > Page
- **Separators**: Forward slashes
- **Current**: Not clickable, bold

### Pagination
- **Previous/Next**: Arrow buttons
- **Page Numbers**: Clickable links
- **Current**: Highlighted, not clickable
- **Ellipsis**: For large page counts

## Modal/Dialog

### Structure
- **Header**: Title and close button
- **Body**: Main content
- **Footer**: Action buttons

### Behavior
- **Backdrop**: Clickable to close
- **Escape**: Closes modal
- **Focus**: Trapped within modal
- **Animation**: Fade in/out

## Alert/Toast

### Types
- **Success**: Green background, checkmark
- **Error**: Red background, X icon
- **Warning**: Yellow background, warning icon
- **Info**: Blue background, info icon

### Positioning
- **Top-right**: Default position
- **Top-center**: For important alerts
- **Bottom-right**: For notifications

### Duration
- **Success**: 3 seconds
- **Error**: 5 seconds
- **Warning**: 4 seconds
- **Info**: 3 seconds

## Badge Component

### Variants
- **Default**: Gray background
- **Primary**: Blue background
- **Success**: Green background
- **Warning**: Yellow background
- **Error**: Red background

### Sizes
- **sm**: 12px font, 4px padding
- **md**: 14px font, 6px padding
- **lg**: 16px font, 8px padding

## Tooltip Component

### Positioning
- **Top**: Above element
- **Bottom**: Below element
- **Left**: Left of element
- **Right**: Right of element

### Behavior
- **Hover**: Show on hover
- **Click**: Show on click
- **Delay**: 200ms before showing
- **Duration**: 300ms animation

## Loading States

### Spinner
- **Size**: 24px, 32px, 48px
- **Color**: Primary color
- **Animation**: Smooth rotation

### Skeleton
- **Shape**: Matches content shape
- **Animation**: Shimmer effect
- **Duration**: 1.5 seconds

### Progress Bar
- **Height**: 4px
- **Color**: Primary color
- **Animation**: Smooth progress

## Hover & Focus States

### Hover Effects
- **Buttons**: Lift shadow, color shift
- **Cards**: Lift shadow, scale slightly
- **Links**: Underline, color change

### Focus States
- **Outline**: 2px solid primary
- **Offset**: 2px from element
- **Color**: Primary color

## Disabled States

### Appearance
- **Opacity**: 50% opacity
- **Cursor**: Not-allowed
- **Color**: Muted color

### Behavior
- **No Interaction**: Disabled
- **No Hover**: No hover effect
- **No Focus**: Cannot be focused
