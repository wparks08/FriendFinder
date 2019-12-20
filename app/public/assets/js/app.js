let questions;
$.get("/api/questions", response => {
    questions = response.questions;
    questions.forEach((question, index) => {
        createCard(question, index);
    })
    M.FormSelect.init(document.querySelectorAll('select'));
});

$("#submit").on("click", function (event) {
    event.preventDefault();

    let data = {
        name: $("#first-name").val().trim() + " " + $("#last-name").val().trim(),
        photo: $("#photo-link").val().trim(),
        scores: []
    }

    for (let i = 0; i < questions.length; i++) {
        data.scores.push(parseInt($("#question-" + i).val()));
    }

    $.post("/api/friends", data, response => {
        console.log(response);
        $("#name").html(response.name);
        $("#photo").attr("src", response.photo);

        M.Modal.init(document.querySelector("#result-modal")).open();
    })
});

function createCard(question, index) {
    $("#questions").append(
        `
            <div class="row">
                <div class="col s12">
                    <div class="card blue-grey lighten-4">
                        <div class="card-content">
                        <span class="card-title">Question ${index + 1}</span>
                        <p>${question}</p>
                        </div>
                        <div class="card-action clearfix">
                            <div class="row">
                                <div class="input-field col l4 m6 s12">
                                    <select id="question-${index}">
                                    <option value="" disabled selected></option>
                                    <option value="1">1 - Strongly Disagree</option>
                                    <option value="2">2 - Somewhat Disagree</option>
                                    <option value="3">3 - Neither Agree or Disagree</option>
                                    <option value="4">4 - Somewhat Agree</option>
                                    <option value="5">5 - Strongly Agree</option>
                                    </select>
                                    <label>Choose Your Answer</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    )
}