class JuanElement extends HTMLElement {
    constructor() {
        super();

        const style = document.createElement('style');
        style.textContent = `  
            :host {
                display: flex;
                flex-direction: column;
                padding: 20px;
                margin: 20px;
                background-color: #ffffff;
                border: 2px solid #333333;
                color: #333333;
                font-family: 'Arial', sans-serif;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            }

            .titulo {
                font-weight: bold;
                font-size: 68px;
                text-align: center;
                text-shadow: 0 1px 0 #ccc, 
                             0 2px 0 #c9c9c9,
                             0 3px 0 #bbb,
                             0 4px 0 #b9b9b9,
                             0 5px 0 #aaa,
                             0 6px 1px rgba(0,0,0,.1),
                             0 0 5px rgba(0,0,0,.1),
                             0 1px 3px rgba(0,0,0,.3),
                             0 3px 5px rgba(0,0,0,.2),
                             0 5px 10px rgba(0,0,0,.25),
                             0 10px 10px rgba(0,0,0,.2),
                             0 20px 20px rgba(0,0,0,.15);
            }

            .carta {
                font-size: 1.2em;
                margin: 20px 0;
                text-align: left;
                border: 1px solid #004080;
                padding: 20px;
                background-color: #f9f9f9;
                border-radius: 5px;
                line-height: 1.6;
                position: relative
                display: flex;
                flex-direction: column ;
                align-items: center;
            }

            .gustos {
                font-size: 1.2em;
                margin-top: 30px;
                padding: 15px;
                background-color: #e6f7ff;
                border-radius: 5px;
                border: 1px solid #004080;
            }

            .gustos h5 {
                margin-bottom: 10px;
                color: #004080;
                font-size: 1.5em;
                text-align: center;
                text-transform: uppercase;
                letter-spacing: 1px;
            }

            .gustos p {
                margin: 5px 0;
                padding-left: 10px;
                position: relative;
            }

            .gustos p:before {
                content: '•';
                color: #004080;
                position: absolute;
                left: 0;
            }

            .foto {
                max-width: 150px;
                height: auto;
                border-radius: 5px;
                margin: 10px 0;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            .formulario {
                display: flex;
                flex-direction: column;
                gap: 15px; /* Increased gap */
                width: 90%;
                max-width: 400px;
                margin: 0 auto;
                background-color: #f0f8ff; /* Light background for the form */
                padding: 40px; /* Added padding */
                border-radius: 5px;
                border: 1px solid #004080; /* Border for the form */
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            .formulario input, .formulario textarea {
                padding: 12px; /* Increased padding */
                border: 1px solid #999;
                border-radius: 5px;
                font-size: 1em;
                width: 100%;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
                transition: border-color 0.3s; /* Smooth transition for border */
            }

            .formulario input:focus, .formulario textarea:focus {
                border-color: #004080; /* Border color on focus */
                outline: none; /* Remove default outline */
            }

            .formulario button {
                padding: 12px; /* Increased padding */
                background-color: #004080;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 1em;
                transition: background-color 0.3s; /* Smooth transition */
            }

            .formulario button:hover {
                background-color: #003366;
            }

            .resultado {
                margin-top: 20px;
                padding: 40px;
                border: 1px solid #004080;
                border-radius: 5px;
                background-color: #e6f7ff;
            }

            @media (max-width: 600px) {
                .titulo {
                    font-size: 48px;
                }
                .formulario {
                    width: 90%;
                }
            }
        `;

        this.attachShadow({ mode: 'open' }).appendChild(style);

        this.shadowRoot.innerHTML += `
            <div class="titulo">
                <slot name="titulo"></slot>
            </div>
            <div class="carta">
                <img class="foto" src="imagen/img.jpg" alt="Descripción de la imagen" onerror="this.onerror=null; this.src='imagenes/default.jpg';">
                <p>jeisson stiven perez gonzalez,</p>
                 <p>hola quiero terminar mi carera como desarrollador de sofwar</p>
                <div class="gustos">
                    <h5>Mis gustos:</h5>
                    <p>Música</p>
                    <p>Deporte</p>
                    <p>Viajar y explorar nuevas culturas</p>
                    <p>Leer libros de desarrollo personal</p>
                    <p>Valorar la vida y disfrutar cada momento</p>
                </div>
                <h2>Formulario</h2>
                <div class="formulario-container">
                    <form class="formulario" id="form">
                        <input type="text" id="nombre" placeholder="Nombre" required aria-label="Nombre">
                        <input type="email" id="email" placeholder="Correo electrónico" required aria-label="Correo electrónico">
                        <textarea id="mensaje" placeholder="Escribe tu mensaje" rows="4" required aria-label="Mensaje"></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                    <div class="resultado" id="resultado"></div>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        console.log("Se ha creado el elemento");

        this.shadowRoot.getElementById('form').addEventListener('submit', (event) => {
            event.preventDefault();
            const nombre = this.shadowRoot.getElementById('nombre').value;
            const email = this.shadowRoot.getElementById('email').value;
            const mensaje = this.shadowRoot.getElementById('mensaje').value;

            const resultadoDiv = this.shadowRoot.getElementById('resultado');
            resultadoDiv.innerHTML = `
                <strong>Datos enviados:</strong><br>
                <strong>Nombre:</strong> ${nombre}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Mensaje:</strong> ${mensaje}
            `;

            event.target.reset();
        });
    }

    disconnectedCallback() {
        console.log("Se ha eliminado el elemento");
    }
}

customElements.define("juan-element", JuanElement);