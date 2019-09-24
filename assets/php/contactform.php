<?php 

if (isset($_POST['name']) && isset($_POST['email']))
{
  $name = $_POST['name'];
  $email = $_POST['email'];
  $to = 'amhay@uw.edu';
  $subject = $_POST['subject']  ;
  $message = $_POST['message'];
 
 
  $send = mail($to, $subject, $message)
  if ($send){
      echo '<br>';
      echo 'Thank you for contact me'
  } else {
      echo 'error';
  }
}
?>
<div class="col-4 col-12-medium">
						<section>
								
							<header>
								<h2>Contact Me</h2>
							</header>
							<section>
									<form method="post" action="">
										<div class="fields">
											<div class="field">
												<label for="name">Name</label>
												<input type="text" name="name" id="name" />
											</div>
											<div class="field">
												<label for="email">Email</label>
												<input type="text" name="email" id="email" />
											</div>
											<div class="field">
												<label for="subject">Subject</label>
												<input type="text" name="subject" id="subject" />
											</div>
											<div class="field">
												<label for="message">Message</label>
												<textarea placeholder = "Ener your message..." name="message" id="message" rows="3"></textarea>
											</div>
										</div>
									</br>
										
									<input class=alt type="submit" value="Send Message" />
										
									</form>

								</section>