// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, 
// plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. 
// Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.

// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

// Time: O(n * m)
// Space: O(n * m)

// Modularized
const floodFill = (image, sr, sc, color) => {
  let current = image[sr][sc]
  fill (image, sr, sc, color, current);
  return image
};

const fill = (image, sr, sc, color, current) => {
  if (sr < 0 || sc < 0 || sr > image.length - 1 || sc > image[sr].length - 1 || image[sr][sc] !== current || current === color) return;
  
  image[sr][sc] = color;
  
  fill(image, sr - 1, sc, color, current)
  fill(image, sr + 1, sc, color, current)
  fill(image, sr, sc - 1, color, current)
  fill(image, sr, sc + 1, color, current)
}

// Simplified
const floodFill = (image, sr, sc, color, current = image[sr][sc]) => {
  if (sr < 0 || sc < 0 || sr > image.length - 1 || sc > image[sr].length - 1 || image[sr][sc] !== current || current === color)   {
    return image;
  }
  
  image[sr][sc] = color;
    
  floodFill(image, sr - 1, sc, color, current);
  floodFill(image, sr + 1, sc, color, current);
  floodFill(image, sr, sc - 1, color, current);
  floodFill(image, sr, sc + 1, color, current);

  return image;
};