// Quiz questions data
const questions = [
  // =============== UNIT 1 (1–50) ===============
  {
    question: "Computer Graphics is the field of computer science that deals with:",
    options: [
      "Creating and manipulating text files",
      "Generating, manipulating, and displaying visual content using computers",
      "Data encryption and networking",
      "Only image compression"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following best describes the goal of computer graphics?",
    options: [
      "To create and display visual content digitally",
      "To convert binary data into ASCII",
      "To manage hardware drivers",
      "To optimize database performance"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Computer Graphics includes everything from:",
    options: [
      "Binary operations to cryptography",
      "Simple 2D images to complex 3D models and simulations",
      "File storage to networking protocols",
      "None of the above"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "In computer graphics, generating and displaying visual effects for movies or games is called:",
    options: [
      "Image Editing",
      "Visualization",
      "Rendering",
      "Encoding"
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "True or False: Computer Graphics can only be used for entertainment applications.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "One of the main uses of computer graphics in the movie industry is:",
    options: [
      "Data compression",
      "Generating special effects and animations",
      "Compiling code",
      "Managing sound files"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following fields does NOT typically use computer graphics?",
    options: [
      "Architecture",
      "Virtual Reality",
      "Word Processing",
      "Medical Imaging"
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Computer Graphics is used in Virtual Reality systems to:",
    options: [
      "Create immersive 3D environments",
      "Compress large text files",
      "Translate documents",
      "Manage databases"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Medical Imaging uses computer graphics for:",
    options: [
      "Data compression",
      "3D reconstruction of CT or MRI scans",
      "Audio visualization",
      "Database retrieval"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "In architecture, computer graphics helps by:",
    options: [
      "Generating 3D models for building visualization",
      "Writing technical documentation",
      "Producing sound simulations",
      "Encrypting blueprints"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Graphics Pipeline refers to:",
    options: [
      "The process of converting source code into graphics",
      "The sequence of steps that transforms a 3D model into a 2D image",
      "A computer network protocol",
      "A type of storage medium"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The first stage of the Graphics Pipeline is:",
    options: [
      "Rasterization",
      "Modeling",
      "Shading",
      "Lighting"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Transformation stage in the Graphics Pipeline is used for:",
    options: [
      "Positioning and manipulating objects in 3D space",
      "Changing image brightness",
      "Storing frame buffers",
      "Color correction"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Lighting in the graphics pipeline calculates:",
    options: [
      "How objects move",
      "How light interacts with surfaces",
      "How fast rendering occurs",
      "The memory usage"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Rasterization converts:",
    options: [
      "3D models into 2D images",
      "Pixels into polygons",
      "Images into text",
      "Colors into equations"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Shading determines:",
    options: [
      "The slope of a line",
      "The color and brightness of each pixel",
      "The 3D position of objects",
      "The wireframe structure"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "True or False: The Graphics Pipeline converts a mathematical description of objects into visible images.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The two main types of computer graphics are:",
    options: [
      "Raster and Vector",
      "Interactive and Non-Interactive",
      "2D and 3D",
      "Hardware and Software"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Interactive Computer Graphics involves:",
    options: [
      "One-way communication",
      "Two-way communication between the user and computer",
      "Only offline processing",
      "No user input"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Example of Interactive Graphics:",
    options: [
      "Screen Saver",
      "Video Game",
      "Movie Rendering",
      "PowerPoint Export"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "In Interactive Graphics, users can:",
    options: [
      "Only view the image",
      "Modify and control the output image",
      "Access frame buffer memory directly",
      "Change monitor hardware"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Non-Interactive Graphics are also called:",
    options: [
      "Dynamic Graphics",
      "Passive Graphics",
      "Real-time Graphics",
      "Interactive Graphics"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Example of Non-Interactive Graphics:",
    options: [
      "Drawing software",
      "Screen saver or static banner",
      "3D simulation",
      "Animation editor"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The three main components of an Interactive Graphics system are:",
    options: [
      "CPU, RAM, Hard Disk",
      "Display Controller, Frame Buffer, Monitor",
      "Printer, Scanner, Plotter",
      "Keyboard, Mouse, CPU"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Display Controller is responsible for:",
    options: [
      "Passing frame buffer contents to the monitor",
      "Calculating 3D geometry",
      "Handling user input",
      "Managing system memory"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Display Controller is also known as:",
    options: [
      "VRAM",
      "VGA or Display Card",
      "CPU",
      "Optical Driver"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Frame Buffer stores:",
    options: [
      "Sound data",
      "Pixel information of images",
      "Database entries",
      "Text documents"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Frame Buffer is also called:",
    options: [
      "Video RAM (V-RAM)",
      "Primary Memory",
      "Cache Memory",
      "ROM"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Frame Buffer helps increase speed because:",
    options: [
      "It bypasses the main CPU when reading/writing image data",
      "It uses complex algorithms",
      "It stores mathematical models",
      "It contains lighting data"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "True or False: The Frame Buffer holds the final rendered image before display.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Rasterization converts:",
    options: [
      "Vector data into pixel-based images",
      "Pixels into vectors",
      "2D into 3D models",
      "None of the above"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "True or False: Rasterization is used in real-time rendering such as video games.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A Vector in graphics represents:",
    options: [
      "A direction and position in space",
      "A pixel on the screen",
      "A frame of animation",
      "A shader"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Vector Graphics are resolution-independent.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A Frame Buffer contains:",
    options: [
      "The pixel data to be displayed on screen",
      "Sound waveforms",
      "Text-based models",
      "3D meshes"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Real-Time Rendering focuses on:",
    options: [
      "High quality with slow processing",
      "Fast rendering for interactive applications",
      "Data compression",
      "3D model storage"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Offline Rendering focuses on:",
    options: [
      "Quality and realism",
      "Speed and responsiveness",
      "Hardware acceleration",
      "Rasterization only"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "True or False: Real-Time Rendering is used in film production.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "In Offline Rendering, each frame may take:",
    options: [
      "A few milliseconds",
      "Several minutes or hours",
      "Microseconds",
      "One second exactly"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "2D Graphics are created on a:",
    options: [
      "Flat plane",
      "Three-dimensional space",
      "Curved surface",
      "Physical object"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "3D Graphics provide:",
    options: [
      "Depth, volume, and perspective",
      "Only width and height",
      "Text-based data",
      "None of the above"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The two ways to represent graphics are:",
    options: [
      "Raster and Vector",
      "RGB and CMYK",
      "2D and 3D",
      "Hardware and Software"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Raster Graphics store images as:",
    options: [
      "Mathematical equations",
      "Grids of colored pixels",
      "Text files",
      "Motion frames"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Vector Graphics store images as:",
    options: [
      "Pixels",
      "Paths and mathematical curves",
      "Bitmaps",
      "Photographs"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Raster Graphics are:",
    options: [
      "Resolution-independent",
      "Resolution-dependent",
      "Infinite in scale",
      "Only 3D"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Vector Graphics can be scaled infinitely without losing quality.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Raster images are best suited for:",
    options: [
      "Complex photos and textures",
      "Simple logos and icons",
      "3D modeling",
      "CAD drawings only"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Vector images are best suited for:",
    options: [
      "Logos, diagrams, and illustrations",
      "Photographs",
      "Pixel-based editing",
      "Texture rendering"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "In Raster Graphics, each pixel typically stores color in formats like:",
    options: [
      "RGB or CMYK",
      "TXT or PDF",
      "ZIP or RAR",
      "None of the above"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "True or False: Raster graphics are ideal for images requiring infinite scalability.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },

  // =============== UNIT 2.1 (51–80) ===============
  {
    question: "What is the fundamental element of picture representation in computer graphics?",
    options: ["Line", "Polygon", "Point", "Circle"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A line or edge is represented by how many points?",
    options: ["One", "Two", "Three", "Four"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The equation of a line in slope-intercept form is:",
    options: ["y = mx + c", "y = bx + m", "y = m + bx", "y = y1 + mx"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The slope (m) of a line represents:",
    options: [
      "The x-axis intercept",
      "The change in height divided by change in width",
      "The angle between two lines",
      "The distance between points"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The y-intercept (b) represents:",
    options: [
      "The point where the line crosses x-axis",
      "The point where the line crosses y-axis",
      "The slope of the line",
      "The midpoint of the line"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "In computer graphics, when drawing a line, the computer actually:",
    options: [
      "Draws a continuous smooth line",
      "Turns ON selected pixels to simulate a line",
      "Uses mathematical symbols",
      "Displays the equation of the line"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following methods uses decimal (floating-point) arithmetic and is slow for computer graphics?",
    options: ["Slope-Intercept", "Parametric Form", "DDA", "Bresenham’s Algorithm"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The problem with the slope-intercept method is that it:",
    options: [
      "Produces incorrect lines",
      "Uses integer values only",
      "Is computationally expensive due to floating-point operations",
      "Is not mathematical"
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The variable t in the parametric equation has a range of:",
    options: ["-1 ≤ t ≤ 1", "0 ≤ t ≤ 1", "1 ≤ t ≤ 10", "None"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The general form of the parametric equation for a line is:",
    options: [
      "x = x1 + t(x2 - x1), y = y1 + t(y2 - y1)",
      "x = y1 + t(x2 - y1)",
      "y = x1 + t(x2 - y1)",
      "x = t + y"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The DDA algorithm stands for:",
    options: [
      "Digital Display Analyzer",
      "Digital Differential Analyzer",
      "Direct Drawing Algorithm",
      "Differential Digital Algorithm"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The DDA algorithm appeared in:",
    options: ["1930", "1940", "1950", "1960"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The DDA algorithm is based on:",
    options: ["Incremental method", "Slope-Intercept method", "Derivative method", "Tangent method"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The main advantage of DDA over slope-intercept form is:",
    options: [
      "It uses floating points only",
      "It is faster and simpler",
      "It requires complex math",
      "It uses no loops"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "DDA eliminates multiplication by using:",
    options: ["Raster characteristics", "Trigonometric functions", "Complex numbers", "Division operations"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A disadvantage of DDA is that it still uses:",
    options: ["Integer arithmetic", "Floating point arithmetic", "Matrix multiplication", "Pixel shading"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "DDA is orientation dependent, meaning:",
    options: [
      "It is independent of direction",
      "Line accuracy depends on slope",
      "It only works horizontally",
      "It only works vertically"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "In DDA, number of steps = max(Δx, Δy).",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "For a line with slope m < 1, DDA increments:",
    options: [
      "x by 1 and y by m",
      "y by 1 and x by m",
      "both x and y by 1",
      "none"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which method uses the concept of parameter t between 0 and 1?",
    options: ["Slope-Intercept", "Parametric Form", "DDA", "Bresenham"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "In the slope-intercept equation y = mx + b, if m1 = m2 for two lines, then the lines are:",
    options: ["Intersecting", "Perpendicular", "Parallel", "None"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The point of intersection of two lines is found when:",
    options: [
      "Their slopes are equal",
      "Their y-intercepts are equal",
      "Both equations satisfy the same (x, y)",
      "None"
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "In DDA, if slope m > 1, then:",
    options: [
      "x = x + 1/m and y = y + 1",
      "x = x + 1 and y = y + m",
      "x = x - 1 and y = y - m",
      "Both A and B"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A line can be defined by how many points?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The process of turning on pixels for a line segment is called:",
    options: ["Rasterization", "Line plotting", "Vector generation", "Rendering"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The y-intercept (b) can be calculated as:",
    options: ["b = y1 - mx1", "b = y2 - mx1", "b = y1 - x1", "b = m + y1"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "If two lines are parallel, the denominator (m1 - m2) in intersection formula becomes:",
    options: ["1", "Infinite", "Zero", "Undefined"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The DDA algorithm uses the following increments:",
    options: [
      "xinc = Δx/steps, yinc = Δy/steps",
      "xinc = Δy/steps, yinc = Δx/steps",
      "Both equal",
      "None"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "DDA algorithm can be implemented as:",
    options: ["Software only", "Hardware and Software", "Hardware only", "None"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "DDA stands for ‘Digital Differential Analyzer’.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },

  // =============== UNIT 2.2 (81–120) ===============
  {
    question: "The Bresenham’s Line Algorithm is used to:",
    options: [
      "Draw smooth curves",
      "Generate straight lines using integer arithmetic",
      "Create circle patterns",
      "Perform anti-aliasing"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Bresenham algorithm is an improvement over:",
    options: [
      "DDA (Digital Differential Analyzer)",
      "Slope-Intercept method",
      "Midpoint circle algorithm",
      "Raster scanning"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The main advantage of Bresenham’s algorithm over DDA is that it:",
    options: [
      "Uses only integer arithmetic",
      "Requires floating-point operations",
      "Is less efficient",
      "Uses trigonometric functions"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Bresenham’s line algorithm determines:",
    options: [
      "Which pixel is closest to the mathematical line path",
      "Which polygon edge is visible",
      "Which vertex to delete",
      "Which color to fill"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "True or False: Bresenham’s Line Algorithm uses only integer addition, subtraction, and bit shifting.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Bresenham’s algorithm works best when the slope of the line satisfies:",
    options: ["|m| < 1", "|m| > 1", "m = 1 only", "m = 0 only"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "When |m| > 1, the Bresenham’s algorithm must:",
    options: [
      "Interchange the role of x and y",
      "Ignore y values",
      "Reduce Δx",
      "Increase step size"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The decision parameter (p₀) for Bresenham’s algorithm is initially computed as:",
    options: ["2Δy − Δx", "Δy − 2Δx", "2Δx − Δy", "Δx − Δy"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The purpose of the decision parameter (pₖ) is to:",
    options: [
      "Decide whether to move vertically or diagonally",
      "Calculate the line slope",
      "Store pixel intensity",
      "Handle transformations"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "If the decision parameter pₖ < 0, the next pixel chosen is:",
    options: ["(xₖ+1, yₖ+1)", "(xₖ+1, yₖ)", "(xₖ, yₖ+1)", "(xₖ−1, yₖ)"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "If the decision parameter pₖ ≥ 0, the next pixel chosen is:",
    options: ["(xₖ+1, yₖ)", "(xₖ+1, yₖ+1)", "(xₖ, yₖ−1)", "(xₖ−1, yₖ+1)"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The recurrence relation for updating the decision parameter is:",
    options: [
      "pₖ₊₁ = pₖ + 2Δy",
      "pₖ₊₁ = pₖ + 2Δy − 2Δx",
      "pₖ₊₁ = pₖ + 2Δy − 2Δx (if pₖ ≥ 0) else pₖ + 2Δy",
      "pₖ₊₁ = pₖ + Δx"
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "True or False: The Bresenham algorithm uses floating-point multiplication.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "In Bresenham’s line algorithm, Δx and Δy represent:",
    options: [
      "Changes in brightness",
      "Differences between the end points in x and y directions",
      "Changes in slope",
      "Pixel color intensity"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "If Δx = 10 and Δy = 5, then the slope (m) is:",
    options: ["0.5", "2", "5", "10"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "When pₖ ≥ 0, y is incremented by:",
    options: ["0", "1", "2", "-1"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "When pₖ < 0, y remains:",
    options: ["Constant", "Incremented by 2", "Decremented", "Randomly changed"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The algorithm is known for generating lines with:",
    options: [
      "Smooth curves",
      "High accuracy and no floating errors",
      "Color gradients",
      "Anti-aliased output"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "True or False: Bresenham’s algorithm can be used for both line and circle generation.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Bresenham’s Line Algorithm is a type of:",
    options: [
      "Incremental raster line algorithm",
      "Recursive method",
      "Trigonometric function-based method",
      "Differential analyzer"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The advantage of using integer arithmetic is:",
    options: [
      "Speed and accuracy on raster displays",
      "More memory usage",
      "Better for floating points",
      "Slower performance"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Bresenham’s algorithm ensures the line:",
    options: [
      "Passes through the midpoint of all pixels",
      "Appears continuous on the raster grid",
      "Uses random pixel positions",
      "Ignores pixel alignment"
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "True or False: Bresenham’s algorithm always produces symmetrical lines for opposite octants.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The algorithm can be extended to draw:",
    options: ["Circles and ellipses", "Only straight vertical lines", "Only diagonal lines", "3D models"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The algorithm selects between two possible pixel positions:",
    options: ["Lower and upper", "Left and right", "Next horizontal or next diagonal", "Random"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "For a line with negative slope (m < 0), the algorithm:",
    options: [
      "Decreases y while increasing x",
      "Increases both x and y",
      "Keeps y constant",
      "Decreases both x and y"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "True or False: Bresenham’s algorithm can draw vertical and horizontal lines without modification.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "For a horizontal line, Δy = 0.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "For a vertical line, Δx = 0.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "When slope (m) = 1, the line is drawn at:",
    options: ["30°", "45°", "60°", "90°"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The algorithm reduces round-off errors by:",
    options: [
      "Avoiding floating-point computation",
      "Using decimal representation",
      "Averaging pixel positions",
      "Increasing resolution"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The algorithm’s efficiency comes from:",
    options: [
      "Incremental integer calculations",
      "Recursive steps",
      "Recalculating slope every step",
      "Using trigonometry"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "True or False: Bresenham’s line algorithm guarantees the same output on any raster device.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The algorithm handles all possible slopes by:",
    options: [
      "Reflecting the line across octants",
      "Using a fixed direction",
      "Scaling pixels",
      "Ignoring y values"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "For a line drawn from left to right, the x coordinate always:",
    options: ["Increases", "Decreases", "Alternates", "Remains constant"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "True or False: In Bresenham’s line algorithm, each iteration plots exactly one pixel.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The efficiency of the algorithm makes it suitable for:",
    options: [
      "Real-time graphics applications",
      "Audio processing",
      "Image compression",
      "Video decoding"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "If Δx = 8 and Δy = 3, the initial decision parameter p₀ = 2Δy − Δx = ?",
    options: ["2", "-2", "4", "-4"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Bresenham algorithm’s decision parameter (pₖ) controls:",
    options: [
      "The choice of the next pixel",
      "Line color",
      "Lighting intensity",
      "Texture mapping"
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "True or False: Bresenham’s Line Algorithm is widely used in hardware graphics implementations.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  }
];

// DOM elements
const quizContainer = document.getElementById("quizContainer");
const resultContainer = document.getElementById("resultContainer");
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const feedback = document.getElementById("feedback");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const finalScore = document.getElementById("finalScore");
const scoreText = document.getElementById("scoreText");
const restartBtn = document.getElementById("restartBtn");

// Application state
let currentQuestionIndex = 0;
let score = 0;

// Initialize the quiz
function init() {
  displayQuestion();
  updateProgressBar();
  updateNavigationButtons();
}

// Display current question
function displayQuestion() {
  const question = questions[currentQuestionIndex];

  questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  questionText.textContent = question.question;

  // Clear previous options
  optionsContainer.innerHTML = "";

  // Add new options
  question.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.classList.add("option");

    if (question.userAnswer === index) {
      optionElement.classList.add("selected");

      if (question.isCorrect !== null) {
        if (question.isCorrect) {
          optionElement.classList.add("correct");
        } else {
          optionElement.classList.add("incorrect");
        }
      }
    }

    optionElement.textContent = option;
    optionElement.addEventListener("click", () => selectOption(index));
    optionsContainer.appendChild(optionElement);
  });

  // Update feedback
  updateFeedback();
}

// Handle option selection
function selectOption(optionIndex) {
  const question = questions[currentQuestionIndex];

  // If question already answered, don't allow changes
  if (question.userAnswer !== null && question.isCorrect !== null) {
    return;
  }

  question.userAnswer = optionIndex;
  question.isCorrect = optionIndex === question.correctAnswer;

  if (question.isCorrect) {
    score++;
  }

  displayQuestion();
  updateNavigationButtons();
}

// Update feedback message
function updateFeedback() {
  const question = questions[currentQuestionIndex];

  if (question.userAnswer !== null && question.isCorrect !== null) {
    if (question.isCorrect) {
      feedback.innerHTML = '<div class="correct-answer">Correct answer!</div>';
    } else {
      const correctOption = question.options[question.correctAnswer];
      feedback.innerHTML = `<div class="incorrect-answer">Incorrect. The correct answer is: <span>"${correctOption}"</span></div>`;
    }
  } else {
    feedback.textContent = "";
  }
}

// Update progress bar
function updateProgressBar() {
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

// Update navigation buttons state
function updateNavigationButtons() {
  prevBtn.disabled = currentQuestionIndex === 0;

  if (currentQuestionIndex === questions.length - 1) {
    nextBtn.textContent = "Finish Quiz";
  } else {
    nextBtn.textContent = "Next";
  }
}

// Navigate to previous question
function goToPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
    updateProgressBar();
    updateNavigationButtons();
  }
}

// Navigate to next question or finish quiz
function goToNextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
    updateProgressBar();
    updateNavigationButtons();
  } else {
    showResults();
  }
}

// Show final results
function showResults() {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";

  finalScore.textContent = `${score}/${questions.length}`;

  const percentage = (score / questions.length) * 100;
  let message = "";

  if (percentage >= 90) {
    message = "Excellent! You have a strong understanding of computer graphics concepts.";
  } else if (percentage >= 70) {
    message = "Good job! You have a solid grasp of computer graphics fundamentals.";
  } else if (percentage >= 50) {
    message = "Fair. You understand some concepts but could benefit from reviewing the material.";
  } else {
    message = "Needs improvement. Consider reviewing the course material to strengthen your knowledge.";
  }

  scoreText.textContent = message;
}

// Restart the quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  // Reset all answers
  questions.forEach((question) => {
    question.userAnswer = null;
    question.isCorrect = null;
  });

  resultContainer.style.display = "none";
  quizContainer.style.display = "block";

  displayQuestion();
  updateProgressBar();
  updateNavigationButtons();
}

// Add event listeners
prevBtn.addEventListener("click", goToPreviousQuestion);
nextBtn.addEventListener("click", goToNextQuestion);
restartBtn.addEventListener("click", restartQuiz);

// Start the quiz
init();
