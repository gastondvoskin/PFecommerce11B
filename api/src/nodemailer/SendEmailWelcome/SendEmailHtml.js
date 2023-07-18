const emailContent =
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
      <style>
          p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
          h1{ font-size: 30px !important;}
          h2{ font-size: 25px !important;}
          h3{ font-size: 18px !important;}
          h4{ font-size: 16px !important;}
          p, a{font-size: 15px !important;}
  
          .claseBoton{
              width: 30%;
                  background-color: white;
                  border: 2px solid #426b1f;
                  color: black; 
                  padding: 16px 32px;
                  text-align: center;
                  text-decoration: none;
                  font-weight: bold;
                  display: inline-block;
                  font-size: 16px;
                  margin: 4px 2px;
                  transition-duration: 0.4s;
                  cursor: pointer;
          }
          .claseBoton:hover{
              background-color: #000000;
              color: #ffffff;
          }
          .imag{
              width: 20px;
              height: 20px;
          }
          .contA{
              margin: 0px 5px 0 5px;
          }
          .afooter{
              color: #ffffff !important; 
              text-decoration: none;
              font-size: 13px !important;
          }
      </style>
  </head>
  <body>
      <div style="width: 100%; background-color: #e3e3e3;">
          <div style="padding: 20px 10px 20px 10px;">
              <!-- Imagen inicial -->
              <div style="background-color: #FFFFFF;border: 5px solid #426b1f; padding: 10px 0px 10px 0px; width: 100%; text-align: center;color: #000000">
                  <h1>Vianda Express<h1/>
              </div>
              <!-- Imagen inicial -->
  
              <!-- Contenido principal -->
              <div style="color:#000000; background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: center;border: 5px solid #426b1f">
                  <h1>¡Bienvenido a Vianda Express!</h1>
                  <p> Gracias por registrarte en nuestra plataforma </p>
  
                  <!-- Gracias -->
                  <p>Nos dedicamos a promover una alimentación saludable tanto en el trabajo como en el hogar. Nuestra misión es brindarte opciones nutritivas y sabrosas que se adapten a tu estilo de vida.</p>
                  <p style="margin-bottom: 50px;"><i>Atentamente:</i><br>Vianda Express</p>
  
                  <!-- Botón -->
                  <a class="claseBoton" href="https://viandaexpress.vercel.app/">Vianda Express</a>
              </div>
              <!-- Contenido principal -->
  
              <!-- Footer -->
              <div style="background-color: #282828; color: #ffffff; padding: 5px 0px 0px 0px; width: auto; text-align: center; border: 5px solid #426b1f;">                  
                  <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                      Comunícate con nosotros por los siguientes medios:<br>
                      Correo: <a class="afooter" href="mailto:viandaexpres84@gmail.com">viandaexpres84@gmail.com</a><br>
                   
                  </p>
                  <p style="background-color: black; padding: 10px 0px 10px 0px; font-size: 12px !important;">
                      © 2023 Vianda Express, todos los derechos reservados.
                  </p>
              </div>
              <!-- Footer -->
  
  
  
          </div>
      </div>
  </body>
  </html>
  
`;

module.exports = emailContent;
