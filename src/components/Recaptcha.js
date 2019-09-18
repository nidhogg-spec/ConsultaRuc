import React from 'react';

function Captcha() {
    return(
        <div>
             <Recaptcha
            onloadCallback={this.recaptchaload}
            verifyCallback={this.verifyCallback}
            sitekey='6LfAAbkUAAAAAIb6TruJFJxi5sBA7NR3OGXmnbou'  
            render = 'explicit'
        />
        </div>
    );

}

export default Capcha;