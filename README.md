# Sorting Algorithm Visualizer

A dynamic, interactive web application that visualizes various sorting algorithms in real-time. Built with Next.js, TypeScript, and Tailwind CSS, this project helps users understand how different sorting algorithms work through animated visualizations.

## 🌟 Features

- Real-time visualization of sorting algorithms
- Multiple sorting algorithms supported
  - Bubble Sort
  - Other algorithms (list your implemented algorithms)
- Adjustable visualization speed
- Customizable array size
- Responsive design
- Algorithm complexity information
- Interactive controls (play/pause/reset)

## 🚀 Live Demo

Check out the live demo: [Visual Sort](https://visualsort-three.vercel.app/)

## 🛠️ Technologies Used

- Next.js 13+
- TypeScript
- Tailwind CSS
- React Context API
- React Icons

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/Bipin-Kalakheti/visualsort.git
```

2. Navigate to the project directory:

```bash
cd visualsort
```

3. Install dependencies:

```bash
npm install

```

4. Run the development server:

```bash
npm run dev

```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎯 Usage

1. Select a sorting algorithm from the dropdown menu
2. Adjust the array size using the size slider
3. Modify the animation speed using the speed slider
4. Click the play button to start the visualization
5. Use the reset button to generate a new random array

## 🧮 Supported Sorting Algorithms

Each algorithm includes:

- Time complexity information
- Brief description
- Visual representation of the sorting process

### Currently Implemented:

- Bubble Sort
  - Worst Case: O(n²)
  - Average Case: O(n²)
  - Best Case: O(n)

(Add other implemented algorithms with their complexities)

## 📝 Code Structure

```
src/
├── components/
│   ├── Input/
│   │   ├── Select.tsx
│   │   └── Slider.tsx
│   └── ...
├── context/
│   └── Visualizer.tsx
├── lib/
│   ├── types.ts
│   └── utils.ts
└── ...
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

### Libraries & Tools
- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

### Special Thanks
- [GeeksforGeeks](https://www.geeksforgeeks.org/) - For sorting algorithm references
- [Visualgo](https://visualgo.net/) - For visualization inspiration
- The open-source community for continuous support and inspiration

### Contributors
- [Bipin Kalakheti](https://github.com/Bipin-Kalakheti) - Project Creator

---

Project Link: [https://github.com/Bipin-Kalakheti/visualsort](https://github.com/Bipin-Kalakheti/visualsort)

---

Made with ❤️ by Bipin Kalakheti
