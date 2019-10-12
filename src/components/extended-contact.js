<?php if (theme_get_setting('enable_contact') == '1') { ?>
    <div class="row">
      <div class="span10">
        <div class="section_title"><span class="section_title_text"><?php echo theme_get_setting('contact_title'); ?></span></div>
      </div>
    </div>
    
    <?php if (theme_get_setting('enable_map') == '1') { ?>
    <div class="row">
      <div class="span10">
        <div id="google_map">
          <iframe width="1170" height="370" src="<?php echo theme_get_setting('map_address'); ?>"></iframe><br />      
        </div>
      </div>
    </div>
    <?php } ?>
  
    <div class="row">   
      <div class="span4">
        <?php if(!$page['contact_1']) {?>
        <h3>Company Creed </h3>
        <ul class="accordion">
          <li class="divider"><h2 class="accordion-head title-color gdl-title"><span class="accordion-head-image active"></span>Sed ut perspiciatis unde</h2>
            <div class="accordion-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </li>
          <li class="divider"><h2 class="accordion-head title-color gdl-title"><span class="accordion-head-image"></span>Temporibus autem quibusdam</h2>
            <div class="accordion-content">
              MLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </div>
          </li>
          <li class="divider"><h2 class="accordion-head title-color gdl-title"><span class="accordion-head-image"></span>Nam libero tempore</h2>
            <div class="accordion-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </li>
        </ul>
        <?php } else { print render($page['contact_1']); }?> 
      </div> 
    
      <div class="span2">
        <?php if(!$page['contact_2']) {?>
        <h3 class="our_details">Our Details</h3>
        <address>
        <strong>Lorem Ipsum, Inc.</strong><br>900 Bagby St<br>Houston, TX, 77002<br><abbr title="Phone">P:</abbr> (123) 456-7890
        </address>
        <p><a href="mailto:info@lorem.inc">info@lorem-inc.com</a><br /></p>
        <input type="text" class="subscribe_input" name="subject" value="Name" size="60" maxlength="64"><br>
            <input type="text" class="subscribe_input" name="subject" value="Email" size="60" maxlength="64"><br>
            <button class="btn btn-small" type="button">Subscribe</button>
        <?php } else { print render($page['contact_2']); }?> 
      </div>
 
      <div class="span4">
      <?php if(!$page['contact_3']) {?>
        <h3>Customer Testimonials</h3> 
          <ul id="quotes">
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            - John Doe
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            - Adam Smith
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            - George Washington
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           - Shirley Temple
          </li>
        </ul>
      <?php } else { print render($page['contact_3']); }?>  
      </div>
    </div>
    
    <?php if($page['contact_full']) {?>
    <div class="row">
      <div id="panels"> 
        <?php print render($page['contact_full']); ?>
      </div>
    </div>
    <?php } } ?>    