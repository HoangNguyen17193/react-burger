import React, {Component} from "react";
import Button from '../../../components/Common/Button/Button';
import classes from './ContactData.module.scss';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    };
    render() {
        return (
          <div className={classes.ContactData}>
              <h4>Enter your contactData</h4>
              <form>
                  <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                  <input className={classes.Input}  type="text" name="name" placeholder="Your email" />
                  <input className={classes.Input}  type="text" name="street" placeholder="Street" />
                  <input className={classes.Input}  type="text" name="postalCode" placeholder="Postal Code" />
                  <Button buttonType="Success">ORDER</Button>
              </form>
          </div>
        );
    }
}

export default ContactData;