/*tooltip */
const labels = document.querySelectorAll('.Label_Form');
        
        labels.forEach(label => {
            const tooltipText = label.querySelector('.tooltiptext');
            
            label.addEventListener('mouseover', () => {
                tooltipText.style.visibility = 'visible';
                tooltipText.style.opacity = '1';
            });

            label.addEventListener('mouseout', () => {
                tooltipText.style.visibility = 'hidden';
                tooltipText.style.opacity = '0';
            });
        });


    /*Alert*/
    const botonEnviar = document.getElementById('botonEnviar');

    botonEnviar.addEventListener('click', () => {
        alert('Mensaje enviado');
    });


    /*Modal*/ 
    var modal = document.getElementById("miModal");

    var label = document.getElementById("terminosLabel");

    var span = document.getElementsByClassName("close")[0];

    label.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }