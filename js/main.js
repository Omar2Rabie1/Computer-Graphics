// Quiz questions data
const questions = [
  {
    question:
      "According to the course outline, which of the following topics is covered immediately after polygon filling algorithms?",
    options: [
      "Three-dimensional object representation",
      "Two-dimensional transformations",
      "Line/ Polygon clipping algorithms",
      "Line drawing algorithms",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "What is the primary function of the rasterization stage in the graphics pipeline?",
    options: [
      "Positioning and orienting objects within the 3D scene.",
      "Converting 3D vector information into a 2D grid of pixels.",
      "Creating 3D models of objects using geometric shapes.",
      "Calculating how light interacts with object surfaces.",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Which of the following best describes non-interactive computer graphics?",
    options: [
      "A screen saver that plays without any user input.",
      "A 3D modeling application for architectural visualization.",
      "Drawing a picture on a touch-screen tablet.",
      "A video game where the player controls a character.",
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "What is a key advantage of vector graphics when compared to raster graphics?",
    options: [
      "They are processed by a stage in the graphics pipeline called rasterization.",
      "They are ideal for representing complex, photorealistic images.",
      "They are stored as a rectangular grid of pixels.",
      "They can be scaled to any size without losing quality.",
    ],
    correctAnswer: 3,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "In the context of interactive graphics hardware, what is the role of the frame buffer (V-RAM)?",
    options: [
      "To store the pixel data of an image before it is sent to the display.",
      "To perform complex mathematical calculations for 3D transformations.",
      "To process user input from devices like a mouse or keyboard.",
      "To convert the 0s and 1s of image data into a video signal.",
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "What distinguishes offline rendering from real-time rendering?",
    options: [
      "Real-time rendering prioritizes visual quality over rendering speed.",
      "Offline rendering is used for applications like film production where quality is paramount.",
      "Offline rendering is used for interactive applications like video games.",
      "Real-time rendering uses vector graphics, while offline rendering uses raster graphics.",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Using the slope-intercept form y=mx+b, what is the equation of a line passing through the points (2,2) and (3,4)?",
    options: ["y=2x−2", "y=0.5x+1", "y=−2x+6", "y=2x+2"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "In Bresenham's line algorithm for a line with a slope m where 0<m<1, if the decision parameter p_k is negative, what is the next pixel to be plotted?",
    options: ["(x_k −1,y_k)", "(x_k+1 ,y_k+1)", "(x_k ,y_k+1)", "(x_k+1 ,y_k)"],
    correctAnswer: 3,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "What is the primary advantage of Bresenham's line algorithm over the DDA algorithm?",
    options: [
      "It produces a smoother-looking line with less jaggedness.",
      "It is simpler to implement.",
      "It uses only integer calculations, making it faster.",
      "It can draw curved lines as well as straight lines.",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "For a line from (20,10) to (30,18), Bresenham's algorithm is used. Given that Δx=10 and Δy=8, what is the initial decision parameter p_0?",
    options: ["2", "-4", "16", "6"],
    correctAnswer: 3,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "The Parametric Form of a line is given by x=x_1 +t(Δx) and y=y_1 +t(Δy). What value of the parameter 't' corresponds to the starting point (x_1 ,y_1)?",
    options: ["t=0", "t=1", "t=0.5", "t=−1"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "What is a identified problem with using the direct slope-intercept form (y=mx+b) for drawing lines in computer graphics?",
    options: [
      "The involvement of floating-point numbers and multiplication makes it slow.",
      "It only works for lines starting at the origin (0,0).",
      "It cannot represent vertical lines.",
      "It requires calculating a square root, which is computationally expensive.",
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "In the Digital Differential Analyzer (DDA) algorithm, how is the number of steps (or iterations) determined?",
    options: [
      "It is the average of Δx and Δy.",
      "It is the smaller value between Δx and Δy.",
      "It is the maximum absolute value of Δx and Δy.",
      "It is always equal to the value of Δx.",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "How are graphics output primitives, like lines, actually drawn on a screen in computer graphics?",
    options: [
      "An algorithm selects and colors a set of pixels to create the illusion of a line.",
      "A laser inside the monitor etches the line onto the screen's surface.",
      "The computer uses mathematical vectors to project a perfect line onto the screen.",
      "A physical pen is used to draw a continuous line on the display surface.",
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "If two lines are parallel, what happens when you try to calculate their point of intersection using the formulas x_p = (b_2 - b_1)/(m_1 - m_2) and y_p = (m_1 b_2 - m_2 b_1)/(m_1 - m_2)?",
    options: [
      "The x and y coordinates of the intersection point will be infinite.",
      "The calculation results in a divide-by-zero error.",
      "The numerator of the equations becomes zero.",
      "The result will be the origin point (0,0).",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Which component of an interactive graphics system is responsible for reading data from the frame buffer and converting it into a video signal for the monitor?",
    options: [
      "The Main CPU",
      "The Television Monitor",
      "The Display Controller (Video Card)",
      "The Frame Buffer (V-RAM)",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Which of these applications is NOT listed as an example of computer graphics usage in the source material?",
    options: [
      "Creating special effects and animated characters in movies.",
      "Medical imaging for 3D reconstructions of CT scans.",
      "Architectural visualization of building designs.",
      "Data analysis and scientific visualization charts.",
    ],
    correctAnswer: 3,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "In the graphical pipeline coordinate system transformation, what is the step that comes immediately after converting to 'World Coordinates'?",
    options: [
      "Normalized Device Coordinates (NDC)",
      "Modeling Coordinates",
      "Device Coordinates",
      "Viewing Coordinates",
    ],
    correctAnswer: 3,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "A 2D raster image with a resolution of 1920x1080 has what characteristic?",
    options: [
      "Its file size is independent of its pixel dimensions.",
      "It can be scaled up to 3840x2160 without any loss of quality.",
      "It is composed of 1920 horizontal lines and 1080 vertical lines.",
      "It has 1920 pixels for its width and 1080 pixels for its height.",
    ],
    correctAnswer: 3,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "What is the primary characteristic of 'point' as a fundamental graphics output primitive?",
    options: [
      "It is formed by the intersection of two lines.",
      "It always has a size of 1 unit in diameter.",
      "It represents a small square area with a specific color.",
      "It is defined by a pair or triplet of coordinate numbers.",
    ],
    correctAnswer: 3,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "In the DDA algorithm, if the slope m>1, what are the incremental steps for x and y?",
    options: [
      "y is incremented by 1, and x is incremented by 1/m.",
      "x is incremented by 1, and y is incremented by m.",
      "Both x and y are incremented by m.",
      "x is incremented by 1, and y is incremented by 1.",
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "For the line from (0,0) to (4,6) drawn using the DDA algorithm, what are the calculated values for Xinc and Yinc?",
    options: [
      "Xinc = 1, Yinc = 1",
      "Xinc = 4, Yinc = 6",
      "Xinc = 1, Yinc = 1.5",
      "Xinc = 4/6, Yinc = 1",
    ],
    correctAnswer: 3,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "What is the purpose of the decision parameter p_k in Bresenham's line algorithm?",
    options: [
      "To store the color value of the current pixel being plotted.",
      "To count the number of pixels that have been drawn so far.",
      "To calculate the exact y-coordinate on the line using floating-point math.",
      "To determine which of the two potential next pixels is closer to the true line.",
    ],
    correctAnswer: 3,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "In Bresenham's algorithm for 0<m<1, if p_k is positive, how is the next decision parameter p_k+1 calculated?",
    options: [
      "p_k+1 = p_k + 2Δy",
      "p_k+1 = p_k + 2Δx",
      "p_k+1 = p_k + 2Δy - 2Δx",
      "p_k+1 = 2Δy - Δx",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },

  {
    question:
      "What is the definition of computer graphics provided in the course material?",
    options: [
      "The study of hardware like GPUs and display monitors.",
      "The science of creating realistic 3D models for video games.",
      "The use of computers to process and analyze digital photographs.",
      "The field that deals with generating, manipulating, and displaying visual content using computers.",
    ],
    correctAnswer: 3,
    userAnswer: null,
    isCorrect: null,
  },
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

  questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${
    questions.length
  }`;
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
    message =
      "Excellent! You have a strong understanding of computer graphics concepts.";
  } else if (percentage >= 70) {
    message =
      "Good job! You have a solid grasp of computer graphics fundamentals.";
  } else if (percentage >= 50) {
    message =
      "Fair. You understand some concepts but could benefit from reviewing the material.";
  } else {
    message =
      "Needs improvement. Consider reviewing the course material to strengthen your knowledge.";
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
