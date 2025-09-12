// DOM Elements
const searchInput = document.getElementById('search');
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const panels = document.querySelectorAll('[data-search]');

// Search functionality
function performSearch() {
    const query = searchInput.value.toLowerCase();
    
    panels.forEach(panel => {
        const searchTerms = panel.getAttribute('data-search').toLowerCase();
        const textContent = panel.textContent.toLowerCase();
        
        if (query === '' || searchTerms.includes(query) || textContent.includes(query)) {
            panel.style.display = 'block';
        } else {
            panel.style.display = 'none';
        }
    });
}

// Menu toggle for mobile
function toggleMenu() {
    menu.classList.toggle('show');
}

// Selector Demo
function setupSelectorDemo() {
    const selectorSelect = document.getElementById('selector-demo');
    const codeElement = document.querySelector('#selector-code .code code');
    
    const selectorExamples = {
        element: {
            css: `/* Element selector */
h3 { color: #00e5ff; }`,
            apply: () => {
                document.querySelectorAll('.selector-playground h3').forEach(el => {
                    el.style.color = '#00e5ff';
                });
            }
        },
        class: {
            css: `/* Class selector */
.demo-box { 
  background: #1a3564; 
  border: 1px solid #7b5cff;
}`,
            apply: () => {
                document.querySelectorAll('.demo-box').forEach(el => {
                    el.style.background = '#1a3564';
                    el.style.border = '1px solid #7b5cff';
                });
            }
        },
        id: {
            css: `/* ID selector */
#special { 
  border: 2px solid gold !important;
  background: rgba(255,215,0,0.2);
}`,
            apply: () => {
                const el = document.getElementById('special');
                if (el) {
                    el.style.border = '2px solid gold';
                    el.style.background = 'rgba(255,215,0,0.2)';
                }
            }
        },
        descendant: {
            css: `/* Descendant selector */
.demo-container p { 
  font-weight: bold; 
  color: #7aff9c;
}`,
            apply: () => {
                document.querySelectorAll('.demo-container p').forEach(el => {
                    el.style.fontWeight = 'bold';
                    el.style.color = '#7aff9c';
                });
            }
        },
        hover: {
            css: `/* Pseudo-class */
button:hover { 
  transform: scale(1.05);
  background: #ff4267;
}`,
            apply: () => {
                // Hover is already handled by CSS
            }
        }
    };
    
    function updateSelectorDemo() {
        if (selectorSelect && codeElement) {
            const selected = selectorSelect.value;
            const example = selectorExamples[selected];
            
            if (example) {
                codeElement.textContent = example.css;
                
                // Reset all styles first
                document.querySelectorAll('.selector-playground *').forEach(el => {
                    el.style.cssText = '';
                });
                
                // Apply new styles
                example.apply();
            }
        }
    }
    
    if (selectorSelect) {
        selectorSelect.addEventListener('change', updateSelectorDemo);
        updateSelectorDemo(); // Initialize
    }
}

// Units Demo
function setupUnitsDemo() {
    const unitSelect = document.getElementById('unit-demo');
    const valueInput = document.getElementById('unit-value');
    const unitBox = document.getElementById('unit-box');
    const unitText = document.getElementById('unit-text');
    const unitInfo = document.getElementById('unit-info');
    
    const unitDescriptions = {
        px: 'pixels - vaste grootte onafhankelijk van andere factoren',
        rem: 'relatief aan root font-size (meestal 16px)',
        em: 'relatief aan parent font-size',
        percent: 'percentage van parent container',
        vw: 'viewport width - percentage van scherm breedte',
        vh: 'viewport height - percentage van scherm hoogte'
    };
    
    function updateUnitsDemo() {
        if (unitSelect && valueInput && unitBox && unitInfo) {
            const unit = unitSelect.value;
            const value = valueInput.value;
            const size = value + unit;
            
            // Apply size based on unit type
            if (unit === 'percent') {
                unitBox.style.width = size;
                unitBox.style.fontSize = (value/100 * 16) + 'px';
            } else if (unit === 'vw' || unit === 'vh') {
                unitBox.style.width = size;
                unitBox.style.fontSize = Math.max(12, value/4) + 'px';
            } else {
                unitBox.style.fontSize = size;
                unitBox.style.width = 'auto';
            }
            
            unitInfo.textContent = `${size} = ${unitDescriptions[unit]}`;
        }
    }
    
    if (unitSelect) unitSelect.addEventListener('change', updateUnitsDemo);
    if (valueInput) valueInput.addEventListener('input', updateUnitsDemo);
    
    updateUnitsDemo(); // Initialize
}

// Color Demo
function setupColorDemo() {
    const colorSelect = document.getElementById('color-demo');
    const colorBox = document.getElementById('color-box');
    const colorValue = document.getElementById('color-value');
    const colorDescription = document.getElementById('color-description');
    
    const colorExamples = {
        hex: { value: '#ff6b35', desc: 'Hexadecimaal - meest gebruikt formaat', color: '#ff6b35' },
        rgb: { value: 'rgb(255, 107, 53)', desc: 'Red Green Blue waarden (0-255)', color: 'rgb(255, 107, 53)' },
        hsl: { value: 'hsl(16, 100%, 60%)', desc: 'Hue Saturation Lightness - intuïtief', color: 'hsl(16, 100%, 60%)' },
        rgba: { value: 'rgba(255, 107, 53, 0.7)', desc: 'RGB met transparantie (alpha 0-1)', color: 'rgba(255, 107, 53, 0.7)' }
    };
    
    function updateColorDemo() {
        if (colorSelect && colorBox && colorValue && colorDescription) {
            const selected = colorSelect.value;
            const example = colorExamples[selected];
            
            if (example) {
                colorBox.style.background = example.color;
                colorValue.textContent = example.value;
                colorDescription.textContent = example.desc;
            }
        }
    }
    
    if (colorSelect) {
        colorSelect.addEventListener('change', updateColorDemo);
        updateColorDemo(); // Initialize
    }
}

// Typography Demo
function setupTypographyDemo() {
    const sizeSlider = document.getElementById('typo-size');
    const weightSelect = document.getElementById('typo-weight');
    const lineSlider = document.getElementById('typo-line');
    const spacingSlider = document.getElementById('typo-spacing');
    
    const sizeValue = document.getElementById('typo-size-val');
    const lineValue = document.getElementById('typo-line-val');
    const spacingValue = document.getElementById('typo-spacing-val');
    
    const typoDemo = document.getElementById('typo-demo');
    
    function updateTypographyDemo() {
        if (typoDemo && sizeSlider && weightSelect && lineSlider && spacingSlider) {
            typoDemo.style.fontSize = sizeSlider.value + 'px';
            typoDemo.style.fontWeight = weightSelect.value;
            typoDemo.style.lineHeight = lineSlider.value;
            typoDemo.style.letterSpacing = spacingSlider.value + 'px';
            
            // Update value displays
            if (sizeValue) sizeValue.textContent = sizeSlider.value + 'px';
            if (lineValue) lineValue.textContent = lineSlider.value;
            if (spacingValue) spacingValue.textContent = spacingSlider.value + 'px';
        }
    }
    
    [sizeSlider, weightSelect, lineSlider, spacingSlider].forEach(control => {
        if (control) control.addEventListener('input', updateTypographyDemo);
    });
    
    updateTypographyDemo(); // Initialize
}

// Display Demo
function setupDisplayDemo() {
    const displaySelect = document.getElementById('display-demo');
    const displayBox = document.getElementById('display-box');
    
    function updateDisplayDemo() {
        if (displaySelect && displayBox) {
            displayBox.style.display = displaySelect.value;
            
            // Special handling for flex and grid
            if (displaySelect.value === 'flex') {
                displayBox.style.justifyContent = 'center';
                displayBox.style.alignItems = 'center';
            } else if (displaySelect.value === 'grid') {
                displayBox.style.placeItems = 'center';
            }
        }
    }
    
    if (displaySelect) {
        displaySelect.addEventListener('change', updateDisplayDemo);
        updateDisplayDemo(); // Initialize
    }
}

// Overflow Demo
function setupOverflowDemo() {
    const overflowSelect = document.getElementById('overflow-demo');
    const overflowContainer = document.getElementById('overflow-container');
    
    function updateOverflowDemo() {
        if (overflowSelect && overflowContainer) {
            overflowContainer.style.overflow = overflowSelect.value;
        }
    }
    
    if (overflowSelect) {
        overflowSelect.addEventListener('change', updateOverflowDemo);
        updateOverflowDemo(); // Initialize
    }
}

// Border Demo
function setupBorderDemo() {
    const widthSlider = document.getElementById('border-width');
    const styleSelect = document.getElementById('border-style');
    const radiusSlider = document.getElementById('border-radius');
    
    const widthValue = document.getElementById('border-width-val');
    const radiusValue = document.getElementById('border-radius-val');
    
    const borderDemo = document.getElementById('border-demo');
    
    function updateBorderDemo() {
        if (borderDemo && widthSlider && styleSelect && radiusSlider) {
            borderDemo.style.borderWidth = widthSlider.value + 'px';
            borderDemo.style.borderStyle = styleSelect.value;
            borderDemo.style.borderColor = '#00e5ff';
            borderDemo.style.borderRadius = radiusSlider.value + 'px';
            
            // Update value displays
            if (widthValue) widthValue.textContent = widthSlider.value + 'px';
            if (radiusValue) radiusValue.textContent = radiusSlider.value + 'px';
        }
    }
    
    [widthSlider, styleSelect, radiusSlider].forEach(control => {
        if (control) control.addEventListener('input', updateBorderDemo);
    });
    
    updateBorderDemo(); // Initialize
}

// Shadow Demo
function setupShadowDemo() {
    const xSlider = document.getElementById('shadow-x');
    const ySlider = document.getElementById('shadow-y');
    const blurSlider = document.getElementById('shadow-blur');
    const opacitySlider = document.getElementById('shadow-opacity');
    
    const shadowDemo = document.getElementById('shadow-demo');
    
    function updateShadowDemo() {
        if (shadowDemo && xSlider && ySlider && blurSlider && opacitySlider) {
            const x = xSlider.value;
            const y = ySlider.value;
            const blur = blurSlider.value;
            const opacity = opacitySlider.value;
            
            shadowDemo.style.boxShadow = `${x}px ${y}px ${blur}px rgba(0, 0, 0, ${opacity})`;
        }
    }
    
    [xSlider, ySlider, blurSlider, opacitySlider].forEach(control => {
        if (control) control.addEventListener('input', updateShadowDemo);
    });
    
    updateShadowDemo(); // Initialize
}

// Animation Demo
function setupAnimationDemo() {
    const transitionButton = document.getElementById('transition-demo');
    const durationSelect = document.getElementById('transition-duration');
    const easingSelect = document.getElementById('transition-easing');
    
    function updateTransitionDemo() {
        if (transitionButton && durationSelect && easingSelect) {
            const duration = durationSelect.value;
            const easing = easingSelect.value;
            
            transitionButton.style.transition = `all ${duration} ${easing}`;
        }
    }
    
    if (durationSelect) durationSelect.addEventListener('change', updateTransitionDemo);
    if (easingSelect) easingSelect.addEventListener('change', updateTransitionDemo);
    
    updateTransitionDemo(); // Initialize
}

// Flexbox controls (existing)
function setupFlexboxDemo() {
    const flexDemo = document.getElementById('flex-demo');
    const directionSelect = document.getElementById('flex-direction');
    const justifySelect = document.getElementById('justify-content');
    const alignSelect = document.getElementById('align-items');
    const wrapSelect = document.getElementById('flex-wrap');
    const gapInput = document.getElementById('flex-gap');
    
    function updateFlexbox() {
        if (flexDemo && directionSelect && justifySelect && alignSelect && wrapSelect && gapInput) {
            flexDemo.style.flexDirection = directionSelect.value;
            flexDemo.style.justifyContent = justifySelect.value;
            flexDemo.style.alignItems = alignSelect.value;
            flexDemo.style.flexWrap = wrapSelect.value;
            flexDemo.style.gap = gapInput.value + 'px';
        }
    }
    
    [directionSelect, justifySelect, alignSelect, wrapSelect, gapInput].forEach(control => {
        if (control) control.addEventListener('change', updateFlexbox);
        if (control) control.addEventListener('input', updateFlexbox);
    });
    
    updateFlexbox();
}

// Flexbox item controls (existing)
function setupFlexboxItems() {
    const fx2 = document.getElementById('fx2');
    const growInput = document.getElementById('grow-2');
    const shrinkInput = document.getElementById('shrink-2');
    const basisInput = document.getElementById('basis-2');
    
    function updateFlexItem() {
        if (fx2 && growInput && shrinkInput && basisInput) {
            fx2.style.flexGrow = growInput.value;
            fx2.style.flexShrink = shrinkInput.value;
            fx2.style.flexBasis = basisInput.value + 'px';
        }
    }
    
    [growInput, shrinkInput, basisInput].forEach(control => {
        if (control) control.addEventListener('input', updateFlexItem);
    });
    
    updateFlexItem();
}

// Grid controls (existing)
function setupGridDemo() {
    const gridDemo = document.getElementById('grid-demo');
    const colsInput = document.getElementById('grid-cols');
    const gapInput = document.getElementById('grid-gap');
    
    function updateGrid() {
        if (gridDemo && colsInput && gapInput) {
            gridDemo.style.gridTemplateColumns = `repeat(${colsInput.value}, 1fr)`;
            gridDemo.style.gap = gapInput.value + 'px';
        }
    }
    
    [colsInput, gapInput].forEach(control => {
        if (control) control.addEventListener('input', updateGrid);
    });
    
    updateGrid();
}

// Position controls (existing)
function setupPositionDemo() {
    const posBox = document.getElementById('pos-box');
    const typeSelect = document.getElementById('pos-type');
    const topInput = document.getElementById('pos-top');
    const leftInput = document.getElementById('pos-left');
    
    function updatePosition() {
        if (posBox && typeSelect && topInput && leftInput) {
            posBox.style.position = typeSelect.value;
            posBox.style.top = topInput.value + 'px';
            posBox.style.left = leftInput.value + 'px';
        }
    }
    
    [typeSelect, topInput, leftInput].forEach(control => {
        if (control) control.addEventListener('change', updatePosition);
        if (control) control.addEventListener('input', updatePosition);
    });
    
    updatePosition();
}

// Responsive breakpoint indicator
function setupResponsiveIndicator() {
    const indicator = document.getElementById('current-breakpoint');
    
    function updateBreakpoint() {
        if (indicator) {
            const width = window.innerWidth;
            if (width < 480) {
                indicator.textContent = 'Mobile (< 480px)';
            } else if (width < 768) {
                indicator.textContent = 'Small Tablet (< 768px)';
            } else if (width < 1024) {
                indicator.textContent = 'Tablet (< 1024px)';
            } else {
                indicator.textContent = 'Desktop (≥ 1024px)';
            }
        }
    }
    
    window.addEventListener('resize', updateBreakpoint);
    updateBreakpoint(); // Initialize
}

// Random image changer for demo
function changeImage() {
    const img = document.getElementById('random-img');
    if (img) {
        // Generate random number between 1-1000 for picsum.photos
        const randomNum = Math.floor(Math.random() * 1000) + 1;
        
        // Add loading effect
        img.style.opacity = '0.5';
        
        // Update with new random picsum photo
        img.src = `https://picsum.photos/300/200?random=${randomNum}`;
        
        // Restore opacity when loaded
        img.onload = function() {
            img.style.opacity = '1';
        };
    }
}

// Figure image changer
function changeFigureImage() {
    const img = document.getElementById('figure-img');
    if (img) {
        // Generate random number for different photo
        const randomNum = Math.floor(Math.random() * 1000) + 1;
        
        // Add loading effect
        img.style.opacity = '0.6';
        img.style.transform = 'scale(0.95)';
        
        // Update with new random picsum photo
        img.src = `https://picsum.photos/280/180?random=${randomNum}`;
        
        // Restore when loaded
        img.onload = function() {
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        };
    }
}

// Make functions available globally
window.changeImage = changeImage;
window.changeFigureImage = changeFigureImage;

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = menu.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu after clicking
                menu.classList.remove('show');
            }
        });
    });
}

// Debounce utility function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    if (searchInput) {
        const debouncedSearch = debounce(performSearch, 300);
        searchInput.addEventListener('input', debouncedSearch);
    }
    
    // Mobile menu toggle
    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMenu);
    }
    
    // Initialize all interactive demos
    setupSelectorDemo();
    setupUnitsDemo();
    setupColorDemo();
    setupTypographyDemo();
    setupDisplayDemo();
    setupOverflowDemo();
    setupBorderDemo();
    setupShadowDemo();
    setupAnimationDemo();
    setupFlexboxDemo();
    setupFlexboxItems();
    setupGridDemo();
    setupPositionDemo();
    setupResponsiveIndicator();
    setupSmoothScrolling();
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
            menu.classList.remove('show');
        }
    });
    
    // Keyboard navigation for accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            menu.classList.remove('show');
        }
    });
    
    // Initialize search on load
    performSearch();
});
        