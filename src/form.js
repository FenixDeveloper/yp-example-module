import validate from "validate.js";

export function initForm(form, constraints, onSubmit) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = Object.fromEntries((new FormData(form)).entries());
        const errors = validate(data, constraints);
        if (errors) for (const fieldName in errors) {
            form.elements[fieldName]
                .closest(".field")
                .querySelector(".help")
                .textContent = errors[fieldName].join(". ")
        }
        else {
            onSubmit(data);
        }
        return false;
    });
}