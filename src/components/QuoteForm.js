import classes from './QuoteForm.module.css';

const QuoteForm = () => {
  return (
    <section className={classes.quote}>
      <h2 className='headingSecondary'>Request a Quote</h2>
      <form className={classes.form} name='sign-up' netlify>
        <div className={classes.name}>
          <div className={classes.fixWidth}>
            <label className={classes.label} for='first-name'>
              First Name
            </label>
            <input id='first-name' type='text' name='first-name' required />
          </div>
          <div className={classes.fixWidth}>
            <label className={classes.label} for='last-name'>
              Last Name
            </label>
            <input
              className={classes.lastInput}
              id='last-name'
              type='text'
              name='last-name'
              required
            />
          </div>
        </div>
        <div>
          <label className={classes.label} for='company'>
            Company
          </label>
          <input id='company' type='company' name='email' />
        </div>

        <div>
          <label className={classes.label} for='email'>
            Email address
          </label>
          <input id='email' type='email' name='email' />
        </div>
        <div>
          <label className={classes.label} for='phone'>
            Phone{' '}
          </label>
          <input id='phone' type='phone' name='phone' />
        </div>
        <div>
          <label className={classes.label} for='project'>
            Project Info{' '}
          </label>
          <textarea id='project' type='project' name='project' />
        </div>

        <button class='btn btn--form'>Sign up now</button>
      </form>
    </section>
  );
};

export default QuoteForm;
