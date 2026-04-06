const statusText = document.querySelector("#status-text");
const statusDetail = document.querySelector("#status-detail");
const checkButton = document.querySelector("#check-button");

async function checkApi() {
  statusText.textContent = "Consultando...";
  statusDetail.textContent = "Esperando respuesta de la funcion serverless.";
  checkButton.disabled = true;

  try {
    const response = await fetch("/api/health");
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "La API devolvio un error.");
    }

    statusText.textContent = "API operativa";
    statusDetail.textContent =
      `${data.message} Respuesta generada a las ${data.timestamp}.`;
  } catch (error) {
    statusText.textContent = "Fallo en la API";
    statusDetail.textContent =
      error instanceof Error
        ? error.message
        : "No se pudo comprobar la API.";
  } finally {
    checkButton.disabled = false;
  }
}

checkButton.addEventListener("click", checkApi);
