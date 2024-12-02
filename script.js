document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener("click", () => {
            // Toggle expanded class for the clicked box
            const isExpanded = box.classList.contains("expanded");
            boxes.forEach(b => b.classList.remove("expanded")); // Close all other boxes
            if (!isExpanded) {
                box.classList.add("expanded");
            }
        });

        // Add event listeners for color and size buttons
        const colorButtons = box.querySelectorAll(".color-btn");
        const sizeButtons = box.querySelectorAll(".size-btn");

        colorButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                e.stopPropagation(); // Prevent triggering box expansion
                const color = button.dataset.color;
                box.style.backgroundColor = color;
            });
        });

        sizeButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                e.stopPropagation(); // Prevent triggering box expansion
                const size = button.dataset.size;
                if (size === "small") {
                    box.style.height = "150px";
                } else if (size === "medium") {
                    box.style.height = "200px";
                } else if (size === "large") {
                    box.style.height = "300px";
                }
            });
        });
    });
});
