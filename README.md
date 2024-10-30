# React Grid Layout 🏗️

[![npm version](https://badge.fury.io/js/react-grid-layout.svg)](https://badge.fury.io/js/react-grid-layout)
[![Build Status](https://travis-ci.org/react-grid-layout/react-grid-layout.svg?branch=master)](https://travis-ci.org/react-grid-layout/react-grid-layout)
[![CDNJS](https://img.shields.io/cdnjs/v/react-grid-layout.svg)](https://cdnjs.com/libraries/react-grid-layout)

React Grid Layout is a powerful and flexible grid layout system for React. It's perfect for creating dashboards, drag-and-drop interfaces, and responsive layouts with ease. 🚀

## Why React Grid Layout? 🤔

- **Intuitive**: Easy to use and integrate into your React projects
- **Flexible**: Adapt to various screen sizes and layout requirements
- **Powerful**: Rich set of features for complex layout scenarios
- **Performant**: Optimized for smooth interactions and animations

### Demo [Link](https://poc-react-grid-layout.netlify.app/)

## ✨ Features

React Grid Layout comes packed with an impressive set of features:

- 📏 **Draggable Grid Items**: Easily move and rearrange grid elements
- 🔄 **Resizable Grid Items**: Adjust the size of grid elements on the fly
- 📱 **Responsive Layouts**: Automatically adapt to different screen sizes
- 🎯 **Customizable**: Extensive options for styling and behavior
- 🔒 **Static Elements**: Support for non-draggable and non-resizable items
- 📊 **Dynamic Add/Remove**: Add or remove grid items programmatically
- 🏷️ **Customizable Drag Handle**: Specify drag handles for precise control
- 🖱️ **Drag From Outside**: Supports dragging elements from outside the grid
- 🔧 **Configurable**: Fine-tune layout constraints and behavior

## 🚀 Getting Started

Install React Grid Layout with npm:

```
npm install react-grid-layout
```

Or with yarn:

```
yarn add react-grid-layout
```

## 🎨 React-Grid-Layout Styling Guide

## 1. Css Class Information

how to target and style different elements of react-grid-layout using styled-components. Here's a breakdown of the key styling targets:

- Grid Container:
  - Target the main container with ```.react-grid-layout```
  - Set background, padding, and overall layout styles

- Grid Items:
  - Target items with ```.react-grid-item```
  - Style normal state, hover, dragging, and resizing states
  - Add transitions and transforms

- Placeholder:
  - Target the drag placeholder with ```.react-grid-placeholder```
  - Style its appearance during drag operations

- Resize Handle:
  - Style the resize handle with ```.react-resizable-handle```
  - Customize its appearance and position

- Drag Handle:
  - Create a custom drag handle component
  - Style it with hover effects

### Important classes you can target:

- ```.react-grid-layout```: Main container
- ```.react-grid-item```: Individual grid items
- ```.react-draggable-dragging```: Items being dragged
- ```.resizing```: Items being resized
- ```.react-grid-placeholder```: Drag placeholder
- ```.react-resizable-handle```: Resize handles

## 2. CSS Styling Methods

### 2.1 Direct CSS

```css
/* styles.css */
.react-grid-layout {
  background: #f5f5f5;
  padding: 20px;
}

.react-grid-item {
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.react-grid-item.resizing {
  opacity: 0.9;
}

.react-grid-item.react-draggable-dragging {
  opacity: 0.8;
  z-index: 100;
}

.react-grid-placeholder {
  background: #6495ED;
  opacity: 0.4;
  border-radius: 4px;
  transition: all 200ms ease;
}

.react-resizable-handle {
  background-image: url('/path-to-handle-image.svg');
  background-position: bottom right;
  background-repeat: no-repeat;
}
```

### 2.2 CSS Modules

```css
/* GridLayout.module.css */
.gridContainer {
  background: #f5f5f5;
}

.gridItem {
  background: white;
  transition: all 200ms ease;
}

.gridItem:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
```

## 3. Styled Components Implementation

### 3.1 Basic Styled Components Setup

```javascript
import styled from 'styled-components';
import { GridLayout } from 'react-grid-layout';

const StyledGridLayout = styled(GridLayout)`
  &.react-grid-layout {
    background: #f5f5f5;
    padding: 20px;
  }
`;

const GridItem = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 16px;
  
  /* Transitions for smooth animations */
  transition: all 0.3s ease;
  
  /* Hover effects */
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
`;
```

### 3.2 Complete Example

```javascript
import React from 'react';
import styled from 'styled-components';
import GridLayout from 'react-grid-layout';

// Style the main grid container
const StyledGridLayout = styled(GridLayout)`
  &.react-grid-layout {
    background: #f5f5f5;
    padding: 20px;
  }

  .react-grid-item {
    transition: all 200ms ease;
    transition-property: left, top, width, height;
    
    &.cssTransforms {
      transition-property: transform, width, height;
    }
    
    &.resizing {
      opacity: 0.9;
      z-index: 1;
    }
    
    &.react-draggable-dragging {
      transition: none;
      z-index: 100;
    }
  }

  .react-grid-placeholder {
    background: #6495ED;
    opacity: 0.4;
    transition: all 100ms linear;
  }
`;

// Style individual grid items
const GridItem = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

// Style the drag handle
const DragHandle = styled.div`
  cursor: move;
  padding: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  margin-bottom: 8px;
  
  &:hover {
    background: #e0e0e0;
  }
`;

const Example = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 2, h: 2 },
    { i: 'b', x: 2, y: 0, w: 2, h: 2 },
    { i: 'c', x: 4, y: 0, w: 2, h: 2 }
  ];

  return (
    <StyledGridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={100}
      width={1200}
      draggableHandle=".drag-handle" // using this props we can set custom draggable button
    >
      {layout.map(item => (
        <div key={item.i}>
          <GridItem>
            <DragHandle className="drag-handle">
              ⋮ Drag Here
            </DragHandle>
            <div>Content {item.i}</div>
          </GridItem>
        </div>
      ))}
    </StyledGridLayout>
  );
};
```

## Creating a Custom Draggable Button
React Grid Layout allows you to create flexible, draggable layouts.

**Create a Draggable Handle**

- Use the `draggableHandle` prop on the `ResponsiveGridLayout` component to specify a CSS selector for the draggable part of your items.
- Add an element with this class (e.g., `drag-handle`) to your button.

**Style Your Components**

- Use Tailwind CSS classes or your preferred styling method to make the button and layout visually appealing.

```jsx
<ResponsiveGridLayout
  className="layout"
  layouts={{ lg: layout }}
  breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
  cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
  rowHeight={100}
  draggableHandle=".drag-handle"
  >
    <div key="button" className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <button className="w-full h-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200">
        <span className="drag-handle cursor-move mr-2">⋮</span>
          Draggable Button
      </button>
    </div>
  </ResponsiveGridLayout>
```

## React Grid Layout Comparison

| Feature | [React Grid Layout](https://github.com/react-grid-layout/react-grid-layout) | [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) | [react-dnd](https://github.com/react-dnd/react-dnd) | [Gridstack.js](https://github.com/gridstack/gridstack.js) | [Muuri](https://github.com/haltu/muuri) |
|---------|----------------|------------------------|------------|----------------|--------|
| Primary Focus | Grid-based drag-and-drop layouts | Drag-and-drop for lists and grids | Flexible drag-and-drop | Grid-based drag-and-drop layouts | Responsive, sortable grid layouts |
| Responsive | Yes | No (requires custom implementation) | No (requires custom implementation) | Yes | Yes |
| Resizable Items | Yes | No | No (requires additional library) | Yes | Yes |
| Static Grid | Yes | No | No | Yes | No (fluid layout) |
| Vertical Compaction | Yes | No | No | Yes | No |
| Server-Side Rendering | Yes | Yes | Yes | No | No |
| Touch Support | Yes | Yes | Limited | Yes | Yes |
| React Specific | Yes | Yes | Yes | No (React wrapper available) | No (React wrapper available) |
| TypeScript Support | Yes | Yes | Yes | Yes | Yes |
| Unpacked Size | ~526 KB | ~1.39 MB | ~231 KB | ~2.85 MB | ~1 MB |
| Learning Curve | Moderate | Low | High | Moderate | Moderate |
| Last Updated | Active | Maintenance Mode | Active | Active | Active |
| License | MIT | Apache-2.0 | MIT | MIT | MIT |
| GitHub Stars | ~17.5k | ~28.5k | ~19k | ~5.5k | ~10k |

## Key Differences

1. **React Grid Layout** is specifically designed for grid-based layouts with both dragging and resizing capabilities, making it ideal for dashboard-like interfaces.

2. **react-beautiful-dnd** focuses on smooth, natural-feeling drag-and-drop primarily for lists, though it can be adapted for grid-like structures. It doesn't support resizing.

3. **react-dnd** is the most flexible but also the most complex to implement. It provides a set of utilities to build custom drag-and-drop interfaces but requires more setup and custom logic.

4. **Gridstack.js** is not React-specific but offers similar functionality to React Grid Layout. It has a steeper learning curve for React developers due to its jQuery roots.

5. **Muuri** focuses on responsive, animated grid layouts. It's not React-specific but can be integrated with React applications.


## React Grid Layout: Pros and Cons

A comprehensive analysis of React Grid Layout to help you make an informed decision for your project.

## 👍 Pros

### Flexibility and Control
- **Draggable Elements:** Built-in support for drag-and-drop functionality
- **Resizable Components:** Users can resize grid items intuitively
- **Responsive Breakpoints:** Configurable layouts for different screen sizes
- **Custom Positioning:** Fine-grained control over grid item placement
- **Static Elements:** Option to make specific grid items static while others remain dynamic

### Developer Experience
- **TypeScript Support:** Full TypeScript definitions included
- **SSR Compatible:** Works with server-side rendering
- **Well-Documented API:** Comprehensive documentation and examples
- **Event Handling:** Rich set of callbacks for layout changes
- **Serializable Layout:** Easy to save and restore layouts
- **Auto-sizing:** Automatically calculates positions based on available space

### Performance
- **Optimized Rendering:** Efficient updates using React's virtual DOM
- **Minimal Dependencies:** Light footprint with few external dependencies
- **Smooth Animations:** Built-in transition effects
- **Handle Large Datasets:** Capable of managing numerous grid items efficiently

### Customization
- **Custom Styling:** Fully customizable with CSS
- **Layout Presets:** Support for predefined layout configurations
- **Margin Control:** Adjustable spacing between grid items
- **Custom Components:** Can wrap any React component
- **Grid Configuration:** Flexible row height and column width settings

## 👎 Cons

### Learning Curve
- **Complex API:** Initial setup can be challenging for beginners
- **Layout Calculations:** Understanding coordinate system takes time
- **Prop Management:** Many configuration options to master
- **Event Handling Complexity:** Advanced usage requires deep understanding

### Technical Limitations
- **Mobile Support:** Touch events can be tricky on some devices
- **Browser Compatibility:** Some features may require polyfills
- **Performance Impact:** Heavy layouts can affect performance
- **Bundle Size:** Adds considerable size to your application
- **Memory Usage:** Can be memory-intensive with many interactive elements

### Implementation Challenges
- **Dynamic Content:** Handling dynamic content height can be tricky
- **Nested Grids:** Complex nested layouts can be difficult to manage
- **Responsive Behavior:** May require significant configuration for complex responsive designs
- **State Management:** Need careful consideration when integrating with state management solutions
- **Layout Persistence:** Additional work needed to save/restore layouts

### Maintenance Considerations
- **Regular Updates:** Keeping up with React version changes
- **Bug Fixes:** Some edge cases may require workarounds
- **Community Support:** Less active compared to some alternatives
- **Custom Solutions:** May need to implement missing features yourself

## 🤔 When to Use

### Good Fit For:
- Dashboards and analytics interfaces
- Admin panels with customizable layouts
- Content management systems
- Interactive grid-based applications
- Applications requiring draggable and resizable components

### Maybe Not For:
- Simple static layouts
- Mobile-first applications
- Projects with simple grid requirements
- Beginners learning React

---

<div align="center">
If this project helps you, please consider giving it a ⭐️
</div>