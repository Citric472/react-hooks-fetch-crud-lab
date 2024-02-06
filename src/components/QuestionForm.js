import React, { useState } from "react";

function QuestionForm(props) {
  const [formData, setFormData] = useState({
    prompt: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctIndex: 0,
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const apiEndpoint = "http://localhost:4000/questions";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successfully added the question, you may want to handle this
        console.log("Question added successfully!");
      } else {
        // Handle error cases
        console.error("Error adding the question");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        {/* Your form input fields go here */}
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;

