document.addEventListener("DOMContentLoaded", function () {
    const roles = [
        { title: "AI Engineer", description: "Develop ML models for robotics & prosthetics. (Python, TensorFlow, Computer Vision)" },
        { title: "Embedded Systems Engineer", description: "Design firmware & hardware for smart devices. (C/C++, Microcontrollers, PCB Design)" },
        { title: "Mechanical Engineer", description: "Build durable, efficient robotic structures. (CAD, Material Science, Prototyping)" },
        { title: "Electrical Engineer", description: "Develop circuits & power systems. (PCB Design, Power Electronics, IoT Hardware)" },
        { title: "Biomedical Engineer", description: "Integrate prosthetics with human physiology. (Biomechanics, EMG Processing)" },
        { title: "Software Engineer", description: "Create control software & interfaces. (Python, C++, ROS, Full Stack Development)" },
        { title: "Product Designer", description: "Design functional, ergonomic tech. (3D Modeling, UI/UX, Prototyping)" },
        { title: "Business & Marketing Lead", description: "Help grow & scale Quarkon. (Marketing, Fundraising, Business Strategy)" }
    ];

    const rolesList = document.getElementById("roles-list");

    roles.forEach((role, index) => {
        let roleDiv = document.createElement("div");
        roleDiv.classList.add("role", "fade-in");
        roleDiv.style.animationDelay = `${index * 0.2}s`;
        roleDiv.innerHTML = `<h3>${role.title}</h3><p>${role.description}</p>`;
        rolesList.appendChild(roleDiv);
    });
});
