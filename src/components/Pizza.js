import * as yup from 'yup'
import schema from '../validation/schema'

//Initial form errors: 

//initial form values: 


export default function Pizza () {
    return (
        <>
            <div className="form-container">
                <div className='form-cta'>
                    <h2>Build Your own Pizza</h2>
                    <div className="cta"></div>
                </div>
            <form id='pizza-form'>
                <h1>Pizza Form</h1>
               <div className="form-comp">
                    <h4>Choice of Size</h4>
                        <select id='size-dropdown'>
                            <option>Please Select</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
               </div>
               <div className="form-comp">
                   <h4>Choice of Sauce</h4>
                    <div className="column">
                    <label>Original Red
                        <input 
                         type='radio'
                         name='sauce'
                         value='red'
                         // onChange={}
                         // checked={}
                        />
                   </label>
                   <label>White alfredo
                        <input
                        type='radio'
                        name='sauce'
                        value='white'
                        // onChange={}
                        // checked={}
                        />
                   </label>
                   <label>Spicy BBQ
                        <input 
                         type='radio'
                         name='sauce'
                         value='bbq'
                         // onChange={}
                         // checked={}
                        />
                   </label>
                   <label>None
                        <input
                         type='radio'
                         name='sauce'
                         value='none'
                         // onChange={}
                         // checked={}
                        />
                   </label>
                    </div>
               </div>
              <div className="form-comp">
                  <h4>Add Toppings</h4>
                    <div className="column-wrapper">
                    <div className="column">
                    <label>Pepperoni
                        <input
                        type='checkbox'
                        name='pepperoni'
                        value='pepperoni'
                        // onChange={}
                        // checked={}
                        />
                   </label>
                   <label>Chicken
                        <input
                        type='checkbox'
                        name='chicken'
                        value='chicken'
                        // onChange={}
                        // checked={}
                        />
                   </label>
                    </div>
                    <div className="column">
                    <label>Spinach
                        <input
                        type='checkbox'
                        name='spinach'
                        value='spinach'
                        // onChange={}
                        // checked={}
                        />
                   </label>
                   <label>Olives
                        <input
                       type='checkbox'
                       name='olives'
                        value='olives'
                        // onChange={}
                        // checked={}
                        />
                   </label>
                    </div>
                    </div>
              </div>
              <div className="form-comp">
                  <h4>Choice of Substitute</h4>
                  <label>Choice of Substitute
                        <input
                         type="checkbox"
                         name='gf'
                           // onChange={}
                        // checked={}
                        />
                    </label>
              </div>
              <div className="form-comp">
                  <h4>Special Instructions</h4>
                  <input 
                    type='text'
                    placeholder="Anything you'd like to add?"
                    id='special-text'
                      // onChange={}
                        // checked={}
                  />
              </div>
            <div className="form-comp">
                <h4>Contact Info</h4>
                <h5>name must be at least 2 characters</h5>
                <label>name
                    <input
                        type='text'
                        id="name-input"
                    />
                </label>
            </div>
            <div className="submit-container">
                <button id='order-button'>Add to Order</button>
            </div>
            </form>
                {/* Bottom Level */}
            </div>  
        </>
    )
}