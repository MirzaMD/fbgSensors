const responses = {
    "what is cancer": "Cancer is a disease caused by the uncontrolled division of abnormal cells in a part of the body.",
    "types of cancers": "Some common types of cancer include breast cancer, lung cancer, prostate cancer, and skin cancer.",
    "breast cancer symptoms": "Common symptoms of breast cancer include lumps in the breast, changes in breast shape, and nipple discharge.",
    "lung cancer symptoms": "Symptoms of lung cancer include coughing (often with blood), chest pain, shortness of breath, and weight loss.",
    "prostate cancer symptoms": "Symptoms of prostate cancer may include difficulty urinating, blood in urine, and pelvic discomfort.",
    "can cancer be cured": "Some types of cancer can be treated successfully, but not all can be cured. Early detection improves chances of successful treatment.",
    "cancer treatment": "Cancer treatment may involve surgery, radiation therapy, chemotherapy, and immunotherapy, depending on the type and stage of cancer.",
    "cancer prevention": "You can reduce cancer risk by avoiding tobacco, eating a healthy diet, maintaining a healthy weight, and getting regular medical checkups.",
    "what are fbg sensors":"Fiber Bragg Grating (FBG) sensors are a type of optical sensor that are widely used in various industries, including telecommunications, structural health monitoring, and biomedical applications. They are based on the principles of fiber optics and are capable of measuring a variety of physical parameters, such as temperature, strain, pressure, and more, with high accuracy.",
    "default": "Sorry, I can only answer questions about common cancer-related topics such as symptoms, treatments, and prevention.",
    "what blood types are most affected by cancer":"While some associations exist between blood type and cancer risk—especially stomach and pancreatic cancers—the links are not fully understood, and blood type is just one of many factors influencing cancer risk. Genetic factors, lifestyle choices (such as smoking, diet, and physical activity), environmental exposures, and infections play much more significant roles in cancer development than blood type alone.",
    "hello":"Hi! i can only help you with cancer related subject",
    "hi":"Hi! i can only help you with cancer related subject",
    "what's new":"Nothing much , cancer is still widely spreading around",
    "how to cure cancer":"There is no one way of curing cancer , it varies depending upon the type and the stage; I reccommend to have healthy diet and sorround yourself with a clean enviroment."
};

function sendMessage() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    if (!userInput.trim()) return;

    appendMessage(userInput, 'user-message');
    
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        appendMessage(botResponse, 'bot-message');
    }, 500);

    document.getElementById("userInput").value = '';
}

function getBotResponse(message) {
    // Return a predefined response or the default response
    return responses[message] || responses["default"];
}

function appendMessage(text, className) {
    const chatMessages = document.getElementById("chatMessages");
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;
    messageElement.innerText = text;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
