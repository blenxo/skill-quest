const quests = [
    {
        id: "q1",
        title: " Python Programming Foundation",
        desc: "Master the foundations of Python programming.",
        type: "main",
        reward: 500,
        sections: [
            {
                title: "Python Basics",
                subtasks: [
                    { id: "q1_1_1", text: "What is Python?" },
                    { id: "q1_1_3", text: "VS Code / Jupyter Notebook setup" },
                    { id: "q1_1_4", text: "Running Python programs" },
                    { id: "q1_1_5", text: "Comments" },
                    { id: "q1_1_6", text: "Indentation" }
                ]
            },
            {
                title: "Variables and Data Types",
                subtasks: [
                    { id: "q1_2_1", text: "Variables" },
                    { id: "q1_2_2", text: "Numbers: int, float" },
                    { id: "q1_2_3", text: "Strings" },
                    { id: "q1_2_4", text: "Boolean values" },
                    { id: "q1_2_5", text: "Type conversion" },
                    { id: "q1_2_6", text: "type() function" }
                ]
            },
            {
                title: "Operators",
                subtasks: [
                    { id: "q1_3_1", text: "Arithmetic operators" },
                    { id: "q1_3_2", text: "Assignment operators" },
                    { id: "q1_3_3", text: "Comparison operators" },
                    { id: "q1_3_4", text: "Logical operators" },
                    { id: "q1_3_5", text: "Membership operators" },
                    { id: "q1_3_6", text: "Identity operators" }
                ]
            },
            {
                title: "Input and Output",
                subtasks: [
                    { id: "q1_4_1", text: "print()" },
                    { id: "q1_4_2", text: "input()" },
                    { id: "q1_4_3", text: "String formatting" },
                    { id: "q1_4_4", text: "f-strings" }
                ]
            },
            {
                title: "Conditional Statements",
                subtasks: [
                    { id: "q1_5_1", text: "if" },
                    { id: "q1_5_2", text: "if-else" },
                    { id: "q1_5_3", text: "if-elif-else" },
                    { id: "q1_5_4", text: "Nested conditions" }
                ]
            },
            {
                title: "Loops",
                subtasks: [
                    { id: "q1_6_1", text: "for loop" },
                    { id: "q1_6_2", text: "while loop" },
                    { id: "q1_6_3", text: "range()" },
                    { id: "q1_6_4", text: "break" },
                    { id: "q1_6_5", text: "continue" },
                    { id: "q1_6_6", text: "Nested loops" }
                ]
            },
            {
                title: "Functions",
                subtasks: [
                    { id: "q1_7_1", text: "Defining functions" },
                    { id: "q1_7_2", text: "Function parameters" },
                    { id: "q1_7_3", text: "Return values" },
                    { id: "q1_7_4", text: "Default arguments" },
                    { id: "q1_7_5", text: "Keyword arguments" },
                    { id: "q1_7_6", text: "Local and global variables" }
                ]
            },
            {
                title: "Python Data Structures",
                subtasks: [
                    { id: "q1_8_1", text: "Strings" },
                    { id: "q1_8_2", text: "Lists" },
                    { id: "q1_8_3", text: "Tuples" },
                    { id: "q1_8_4", text: "Sets" },
                    { id: "q1_8_5", text: "Dictionaries" },
                    { id: "q1_8_6", text: "List methods" },
                    { id: "q1_8_7", text: "Dictionary methods" }
                ]
            },
            {
                title: "File Handling",
                subtasks: [
                    { id: "q1_9_1", text: "Opening files" },
                    { id: "q1_9_2", text: "Reading files" },
                    { id: "q1_9_3", text: "Writing files" },
                    { id: "q1_9_4", text: "Appending files" },
                    { id: "q1_9_5", text: "Working with CSV files" }
                ]
            },
            {
                title: "Error Handling",
                subtasks: [
                    { id: "q1_10_1", text: "Syntax errors" },
                    { id: "q1_10_2", text: "Runtime errors" },
                    { id: "q1_10_3", text: "try" },
                    { id: "q1_10_4", text: "except" },
                    { id: "q1_10_5", text: "finally" },
                    { id: "q1_10_6", text: "Common Python errors" }
                ]
            }
        ]
    },
    {
        id: "q2",
        title: "Logic and Problem Solving",
        desc: "Develop logical thinking algorithms.",
        type: "main",
        reward: 600,
        sections: [
            {
                title: "2.1 Problem-Solving Method",
                subtasks: [
                    { id: "q2_1_1", text: "Input, process, output" },
                    { id: "q2_1_2", text: "Algorithm thinking" },
                    { id: "q2_1_3", text: "Pseudocode" },
                    { id: "q2_1_4", text: "Flowcharts" },
                    { id: "q2_1_5", text: "Dry run method" }
                ]
            },
            {
                title: "2.2 Basic Logic Problems",
                subtasks: [
                    { id: "q2_2_1", text: "Odd or even" },
                    { id: "q2_2_2", text: "Positive or negative" },
                    { id: "q2_2_3", text: "Largest of numbers" },
                    { id: "q2_2_4", text: "Leap year" },
                    { id: "q2_2_5", text: "Simple calculator" },
                    { id: "q2_2_6", text: "Grade calculator" }
                ]
            },
            {
                title: "2.3 Loop-Based Problems",
                subtasks: [
                    { id: "q2_3_1", text: "Factorial" },
                    { id: "q2_3_2", text: "Multiplication table" },
                    { id: "q2_3_3", text: "Sum of numbers" },
                    { id: "q2_3_4", text: "Prime number" },
                    { id: "q2_3_5", text: "Fibonacci series" },
                    { id: "q2_3_6", text: "Reverse a number" },
                    { id: "q2_3_7", text: "Palindrome number" }
                ]
            },
            {
                title: "2.4 Pattern Problems",
                subtasks: [
                    { id: "q2_4_1", text: "Star patterns" },
                    { id: "q2_4_2", text: "Number patterns" },
                    { id: "q2_4_3", text: "Pyramid patterns" },
                    { id: "q2_4_4", text: "Nested loop problems" }
                ]
            },
            {
                title: "2.5 List-Based Problems",
                subtasks: [
                    { id: "q2_5_1", text: "Sum of list" },
                    { id: "q2_5_2", text: "Maximum and minimum" },
                    { id: "q2_5_3", text: "Search element" },
                    { id: "q2_5_4", text: "Count frequency" },
                    { id: "q2_5_5", text: "Remove duplicates" },
                    { id: "q2_5_6", text: "Sort list manually" }
                ]
            },
            {
                title: "2.6 Real-Life Logic Problems",
                subtasks: [
                    { id: "q2_6_1", text: "Profit/loss calculator" },
                    { id: "q2_6_2", text: "EMI calculator" },
                    { id: "q2_6_3", text: "Expense tracker" },
                    { id: "q2_6_4", text: "Stock average price calculator" },
                    { id: "q2_6_5", text: "Student marks management" },
                    { id: "q2_6_6", text: "Simple billing system" }
                ]
            }
        ]
    },
    {
        id: "q3",
        title: "Mathematics for AI/ML",
        desc: "Learn the foundational math required for algorithms.",
        type: "main",
        reward: 700,
        sections: [
            {
                title: "3.1 Basic Math",
                subtasks: [
                    { id: "q3_1_1", text: "Percentages" },
                    { id: "q3_1_2", text: "Ratios" },
                    { id: "q3_1_3", text: "Exponents" },
                    { id: "q3_1_4", text: "Logarithms" },
                    { id: "q3_1_5", text: "Summation" }
                ]
            },
            {
                title: "3.2 Linear Algebra Basics",
                subtasks: [
                    { id: "q3_2_1", text: "Scalars" },
                    { id: "q3_2_2", text: "Vectors" },
                    { id: "q3_2_3", text: "Matrices" },
                    { id: "q3_2_4", text: "Matrix addition" },
                    { id: "q3_2_5", text: "Matrix multiplication" },
                    { id: "q3_2_6", text: "Dot product" }
                ]
            },
            {
                title: "3.3 Probability",
                subtasks: [
                    { id: "q3_3_1", text: "Basic probability" },
                    { id: "q3_3_2", text: "Independent events" },
                    { id: "q3_3_3", text: "Dependent events" },
                    { id: "q3_3_4", text: "Conditional probability" },
                    { id: "q3_3_5", text: "Bayes theorem basics" }
                ]
            },
            {
                title: "3.4 Statistics",
                subtasks: [
                    { id: "q3_4_1", text: "Mean" },
                    { id: "q3_4_2", text: "Median" },
                    { id: "q3_4_3", text: "Mode" },
                    { id: "q3_4_4", text: "Range" },
                    { id: "q3_4_5", text: "Variance" },
                    { id: "q3_4_6", text: "Standard deviation" },
                    { id: "q3_4_7", text: "Correlation" },
                    { id: "q3_4_8", text: "Outliers" }
                ]
            },
            {
                title: "3.5 Calculus Basics",
                subtasks: [
                    { id: "q3_5_1", text: "Function" },
                    { id: "q3_5_2", text: "Slope" },
                    { id: "q3_5_3", text: "Derivative idea" },
                    { id: "q3_5_4", text: "Gradient" },
                    { id: "q3_5_5", text: "Loss minimization idea" }
                ]
            }
        ]
    },
    {
        id: "q4",
        title: "4. Python Libraries for Data Science",
        desc: "Master tools like NumPy, pandas, and Matplotlib.",
        type: "main",
        reward: 800,
        sections: [
            {
                title: "4.1 NumPy",
                subtasks: [
                    { id: "q4_1_1", text: "Basics" },
                    { id: "q4_1_2", text: "NumPy arrays" },
                    { id: "q4_1_3", text: "Creating arrays" },
                    { id: "q4_1_4", text: "Array indexing & slicing" },
                    { id: "q4_1_5", text: "Array shape" },
                    { id: "q4_1_6", text: "Operations (Addition, Multiplication)" },
                    { id: "q4_1_7", text: "Mean, sum, min, max" },
                    { id: "q4_1_8", text: "Reshape" },
                    { id: "q4_1_9", text: "Broadcasting" },
                    { id: "q4_1_10", text: "Random numbers" }
                ]
            },
            {
                title: "4.2 pandas",
                subtasks: [
                    { id: "q4_2_1", text: "Series & DataFrame Basics" },
                    { id: "q4_2_2", text: "Reading & Writing CSV files" },
                    { id: "q4_2_3", text: "Data Selection (rows, columns, loc, iloc)" },
                    { id: "q4_2_4", text: "Filtering data" },
                    { id: "q4_2_5", text: "Data Cleaning (Missing, duplicates)" },
                    { id: "q4_2_6", text: "Rename columns & Change data types" },
                    { id: "q4_2_7", text: "Sorting data" },
                    { id: "q4_2_8", text: "Data Analysis (describe, groupby)" },
                    { id: "q4_2_9", text: "value_counts() & Aggregation" }
                ]
            },
            {
                title: "4.3 Matplotlib",
                subtasks: [
                    { id: "q4_3_1", text: "Line chart" },
                    { id: "q4_3_2", text: "Bar chart" },
                    { id: "q4_3_3", text: "Scatter plot" },
                    { id: "q4_3_4", text: "Histogram" },
                    { id: "q4_3_5", text: "Labels and titles" },
                    { id: "q4_3_6", text: "Simple data visualization" }
                ]
            }
        ]
    },
    {
        id: "q5",
        title: "Data Analysis",
        desc: "Analyze and clean datasets.",
        type: "main",
        reward: 900,
        sections: [
            {
                title: "5.1 Data Understanding",
                subtasks: [
                    { id: "q5_1_1", text: "What is a dataset? (Rows, Columns)" },
                    { id: "q5_1_2", text: "Features & Labels" },
                    { id: "q5_1_3", text: "Numerical vs Categorical data" }
                ]
            },
            {
                title: "5.2 Data Cleaning",
                subtasks: [
                    { id: "q5_2_1", text: "Missing data" },
                    { id: "q5_2_2", text: "Wrong values & Duplicate rows" },
                    { id: "q5_2_3", text: "Outliers & Data formatting" }
                ]
            },
            {
                title: "5.3 Exploratory Data Analysis",
                subtasks: [
                    { id: "q5_3_1", text: "Summary statistics" },
                    { id: "q5_3_2", text: "Data visualization" },
                    { id: "q5_3_3", text: "Correlation checking" },
                    { id: "q5_3_4", text: "Trend & Pattern finding" }
                ]
            },
            {
                title: "5.4 Mini Data Projects",
                subtasks: [
                    { id: "q5_4_1", text: "Student marks analysis" },
                    { id: "q5_4_2", text: "Expense & Sales analysis" },
                    { id: "q5_4_3", text: "Stock CSV & YouTube data analysis" }
                ]
            }
        ]
    },
    {
        id: "q6",
        title: "Machine Learning Foundation",
        desc: "Core concepts of ML models.",
        type: "main",
        reward: 1000,
        sections: [
            {
                title: "6.1 Introduction to ML",
                subtasks: [
                    { id: "q6_1_1", text: "What is machine learning?" },
                    { id: "q6_1_2", text: "AI vs ML vs Deep Learning" },
                    { id: "q6_1_3", text: "Why ML is used (Real-life examples)" }
                ]
            },
            {
                title: "6.2 Types of Machine Learning",
                subtasks: [
                    { id: "q6_2_1", text: "Supervised learning" },
                    { id: "q6_2_2", text: "Unsupervised learning" },
                    { id: "q6_2_3", text: "Reinforcement learning" }
                ]
            },
            {
                title: "6.3 ML Terminology",
                subtasks: [
                    { id: "q6_3_1", text: "Dataset, Feature, Label" },
                    { id: "q6_3_2", text: "Model, Training, Testing" },
                    { id: "q6_3_3", text: "Prediction & Accuracy" }
                ]
            },
            {
                title: "6.4 ML Workflow",
                subtasks: [
                    { id: "q6_4_1", text: "Collect & Clean data" },
                    { id: "q6_4_2", text: "Split data" },
                    { id: "q6_4_3", text: "Train & Test model" },
                    { id: "q6_4_4", text: "Improve & Deploy model" }
                ]
            }
        ]
    },
    {
        id: "q7",
        title: "Supervised Machine Learning",
        desc: "Train predictive models with labeled data.",
        type: "main",
        reward: 1200,
        sections: [
            {
                title: "7.1 Regression",
                subtasks: [
                    { id: "q7_1_1", text: "What is regression?" },
                    { id: "q7_1_2", text: "Linear & Multiple linear regression" },
                    { id: "q7_1_3", text: "Polynomial regression" },
                    { id: "q7_1_4", text: "Mean squared error & R² score" }
                ]
            },
            {
                title: "7.2 Classification",
                subtasks: [
                    { id: "q7_2_1", text: "What is classification?" },
                    { id: "q7_2_2", text: "Logistic regression" },
                    { id: "q7_2_3", text: "K-nearest neighbors & Decision tree" },
                    { id: "q7_2_4", text: "Random forest & Naive Bayes" },
                    { id: "q7_2_5", text: "Support Vector Machine basics" }
                ]
            },
            {
                title: "7.3 Model Evaluation",
                subtasks: [
                    { id: "q7_3_1", text: "Accuracy, Precision, Recall, F1-score" },
                    { id: "q7_3_2", text: "Confusion matrix" },
                    { id: "q7_3_3", text: "Train-test split & Cross-validation" }
                ]
            }
        ]
    },
    {
        id: "q8",
        title: "Unsupervised Machine Learning",
        desc: "Discover patterns in unlabeled data.",
        type: "main",
        reward: 1300,
        sections: [
            {
                title: "8.1 Clustering",
                subtasks: [
                    { id: "q8_1_1", text: "What is clustering?" },
                    { id: "q8_1_2", text: "K-means clustering" },
                    { id: "q8_1_3", text: "Customer segmentation & Visualization" }
                ]
            },
            {
                title: "8.2 Dimensionality Reduction",
                subtasks: [
                    { id: "q8_2_1", text: "Why reduce dimensions?" },
                    { id: "q8_2_2", text: "PCA basics" },
                    { id: "q8_2_3", text: "Feature reduction idea" }
                ]
            }
        ]
    },
    {
        id: "q9",
        title: "Data Preprocessing for ML",
        desc: "Prepare datasets for optimal model performance.",
        type: "main",
        reward: 1400,
        sections: [
            {
                title: "9.1 Cleaning Data",
                subtasks: [
                    { id: "q9_1_1", text: "Missing values" },
                    { id: "q9_1_2", text: "Duplicate values" },
                    { id: "q9_1_3", text: "Outliers" }
                ]
            },
            {
                title: "9.2 Feature Engineering",
                subtasks: [
                    { id: "q9_2_1", text: "Creating new features" },
                    { id: "q9_2_2", text: "Selecting useful features" },
                    { id: "q9_2_3", text: "Removing useless columns" }
                ]
            },
            {
                title: "9.3 Encoding",
                subtasks: [
                    { id: "q9_3_1", text: "Label encoding" },
                    { id: "q9_3_2", text: "One-hot encoding" },
                    { id: "q9_3_3", text: "Handling categorical data" }
                ]
            },
            {
                title: "9.4 Scaling",
                subtasks: [
                    { id: "q9_4_1", text: "Standardization" },
                    { id: "q9_4_2", text: "Normalization" },
                    { id: "q9_4_3", text: "Why scaling is needed" }
                ]
            }
        ]
    },
    {
        id: "q10",
        title: "Deep Learning Basics",
        desc: "Neural Networks, CNNs, and advanced architectures.",
        type: "main",
        reward: 1800,
        sections: [
            {
                title: "10.1 Neural Network Basics",
                subtasks: [
                    { id: "q10_1_1", text: "Neuron, Weights, Bias" },
                    { id: "q10_1_2", text: "Activation function" },
                    { id: "q10_1_3", text: "Layers & Forward propagation" }
                ]
            },
            {
                title: "10.2 Training Neural Networks",
                subtasks: [
                    { id: "q10_2_1", text: "Loss function & Gradient descent" },
                    { id: "q10_2_2", text: "Backpropagation idea" },
                    { id: "q10_2_3", text: "Epochs & Batch size" }
                ]
            },
            {
                title: "10.3 Deep Learning Libraries",
                subtasks: [
                    { id: "q10_3_1", text: "TensorFlow basics" },
                    { id: "q10_3_2", text: "Keras basics" },
                    { id: "q10_3_3", text: "PyTorch basics" }
                ]
            },
            {
                title: "10.4 Deep Learning Applications",
                subtasks: [
                    { id: "q10_4_1", text: "Image & Text classification" },
                    { id: "q10_4_2", text: "Speech recognition" },
                    { id: "q10_4_3", text: "Object detection basics" }
                ]
            }
        ]
    },
    {
        id: "q11",
        title: "AI App Development",
        desc: "Build AI applications and interfaces.",
        type: "main",
        reward: 2000,
        sections: [
            {
                title: "11.1 Backend Basics",
                subtasks: [
                    { id: "q11_1_1", text: "Flask & FastAPI" },
                    { id: "q11_1_2", text: "Routes, Request and response" },
                    { id: "q11_1_3", text: "JSON & API endpoints" }
                ]
            },
            {
                title: "11.2 Frontend Connection",
                subtasks: [
                    { id: "q11_2_1", text: "HTML forms & JS fetch" },
                    { id: "q11_2_2", text: "Sending data to backend" },
                    { id: "q11_2_3", text: "Showing results on webpage" }
                ]
            },
            {
                title: "11.3 AI API Usage",
                subtasks: [
                    { id: "q11_3_1", text: "API keys & Prompting" },
                    { id: "q11_3_2", text: "Sending & Receiving data" },
                    { id: "q11_3_3", text: "Error handling" }
                ]
            },
            {
                title: "11.4 Chatbot Development",
                subtasks: [
                    { id: "q11_4_1", text: "Basic & FAQ chatbot" },
                    { id: "q11_4_2", text: "Study assistant chatbot" },
                    { id: "q11_4_3", text: "Business website chatbot" }
                ]
            },
            {
                title: "11.5 Document AI",
                subtasks: [
                    { id: "q11_5_1", text: "PDF reading & Text extraction" },
                    { id: "q11_5_2", text: "Summarization & Q/A from documents" },
                    { id: "q11_5_3", text: "Notes generation" }
                ]
            }
        ]
    },
    {
        id: "q12",
        title: "Computer Vision Basics",
        desc: "Teach machines to see and interpret visuals.",
        type: "main",
        reward: 2200,
        sections: [
            {
                title: "12.1 OpenCV Basics",
                subtasks: [
                    { id: "q12_1_1", text: "Reading, Showing, Resizing images" },
                    { id: "q12_1_2", text: "Grayscale & Edge detection" }
                ]
            },
            {
                title: "12.2 Image Classification",
                subtasks: [
                    { id: "q12_2_1", text: "What is image classification?" },
                    { id: "q12_2_2", text: "Training & Testing models" },
                    { id: "q12_2_3", text: "Accuracy checking" }
                ]
            },
            {
                title: "12.3 Object Detection Basics",
                subtasks: [
                    { id: "q12_3_1", text: "What is object detection?" },
                    { id: "q12_3_2", text: "Bounding boxes & YOLO basics" },
                    { id: "q12_3_3", text: "Real-time detection idea" }
                ]
            }
        ]
    },
    {
        id: "q13",
        title: "AI/ML Projects",
        desc: "Showcase your portfolio.",
        type: "main",
        reward: 3000,
        sections: [
            {
                title: "Beginner Projects",
                subtasks: [
                    { id: "q13_1_1", text: "Calculator & Expense tracker" },
                    { id: "q13_1_2", text: "Student marks & Stock calculator" },
                    { id: "q13_1_3", text: "To-do app" }
                ]
            },
            {
                title: "Data Analysis Projects",
                subtasks: [
                    { id: "q13_2_1", text: "Sales & Expense analysis" },
                    { id: "q13_2_2", text: "Student & Stock analysis" },
                    { id: "q13_2_3", text: "Weather data analysis" }
                ]
            },
            {
                title: "ML Projects",
                subtasks: [
                    { id: "q13_3_1", text: "House price & Student pass prediction" },
                    { id: "q13_3_2", text: "Spam classifier & Movie recommendation" },
                    { id: "q13_3_3", text: "Customer churn prediction" }
                ]
            },
            {
                title: "AI App Projects",
                subtasks: [
                    { id: "q13_4_1", text: "AI study assistant & Resume checker" },
                    { id: "q13_4_2", text: "AI notes generator & Chatbot" },
                    { id: "q13_4_3", text: "AI finance tracker" }
                ]
            },
            {
                title: "Robotics + AI Projects",
                subtasks: [
                    { id: "q13_5_1", text: "Face detection & Object-following robot" },
                    { id: "q13_5_2", text: "Voice-controlled & Smart irrigation" },
                    { id: "q13_5_3", text: "Obstacle avoidance robot" }
                ]
            }
        ]
    },
    {
        id: "q14",
        title: "Tools You Should Learn",
        desc: "Essential tools for the modern developer.",
        type: "main",
        reward: 1000,
        sections: [
            {
                title: "Coding Tools",
                subtasks: [
                    { id: "q14_1_1", text: "VS Code" },
                    { id: "q14_1_2", text: "Jupyter Notebook" },
                    { id: "q14_1_3", text: "Google Colab" }
                ]
            },
            {
                title: "Version Control",
                subtasks: [
                    { id: "q14_2_1", text: "Git & GitHub basics" },
                    { id: "q14_2_2", text: "Repository creation" },
                    { id: "q14_2_3", text: "README writing" }
                ]
            },
            {
                title: "Deployment Tools",
                subtasks: [
                    { id: "q14_3_1", text: "GitHub Pages & Render" },
                    { id: "q14_3_2", text: "Vercel & Netlify" },
                    { id: "q14_3_3", text: "Hugging Face Spaces" }
                ]
            },
            {
                title: "Database Tools",
                subtasks: [
                    { id: "q14_4_1", text: "SQL & SQLite" },
                    { id: "q14_4_2", text: "MySQL & PostgreSQL basics" }
                ]
            }
        ]
    }
];

const sideQuests = {
    robotics: {
        id: "robotics",
        title: "Robotics",
        desc: "Apply AI to physical agents.",
        type: "side",
        reward: 1500,
        sections: [
            {
                title: "Robotics Foundations",
                subtasks: [
                    { id: "sq_rob_1", text: "Introduction to ROS (Robot Operating System)" },
                    { id: "sq_rob_2", text: "Kinematics & Dynamics Basics" }
                ]
            },
            {
                title: "AI & Control",
                subtasks: [
                    { id: "sq_rob_3", text: "Computer Vision for Robot Perception" },
                    { id: "sq_rob_4", text: "Reinforcement Learning for Motor Control" },
                    { id: "sq_rob_5", text: "Path Planning & Obstacle Avoidance" }
                ]
            }
        ]
    },
    stock: {
        id: "stock",
        title: "Stock Market",
        desc: "Algorithmic trading & time series.",
        type: "side",
        reward: 1500,
        sections: [
            {
                title: "Market Data & Analysis",
                subtasks: [
                    { id: "sq_stk_1", text: "Understanding Key Market Indicators" },
                    { id: "sq_stk_2", text: "Fetching Data via yfinance & APIs" }
                ]
            },
            {
                title: "Predictive Modeling",
                subtasks: [
                    { id: "sq_stk_3", text: "Time Series Forecasting (ARIMA, LSTMs)" },
                    { id: "sq_stk_4", text: "Sentiment Analysis of Financial News" },
                    { id: "sq_stk_5", text: "Backtesting Trading Strategies" }
                ]
            }
        ]
    }
};
