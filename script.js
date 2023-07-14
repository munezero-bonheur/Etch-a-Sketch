const container = document.querySelector('.container');

    function createGrid() {
      // Prompt user for grid size
      const gridSize = parseInt(prompt('Enter the number of squares per side (maximum 100):'));
      if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert('Invalid input! Please enter a number between 1 and 100.');
        return;
      }

      // Clear existing grid
      container.innerHTML = '';

      // Calculate square size
      const squareSize = `${100 / gridSize}%`;

      // Create grid squares
      for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', changeColor);
        square.style.width = squareSize;
        square.style.height = squareSize;
        container.appendChild(square);
      }

      // Set container width to match the grid
      container.style.width = `calc(${squareSize} * ${gridSize})`;
    }

    function changeColor(event) {
      const square = event.target;
      const currentColor = square.style.backgroundColor;
      const rgb = currentColor ? currentColor.match(/\d+/g) : [255, 255, 255];

      // Randomize RGB values
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      // Calculate darker color
      const darkenAmount = 0.1;
      const newColor = `rgb(${Math.floor((rgb[0] * (1 - darkenAmount)) + (r * darkenAmount))},
                             ${Math.floor((rgb[1] * (1 - darkenAmount)) + (g * darkenAmount))},
                             ${Math.floor((rgb[2] * (1 - darkenAmount)) + (b * darkenAmount))})`;

      // Apply new color to square
      square.style.backgroundColor = newColor;
    }
    
    // Create initial grid
    createGrid();