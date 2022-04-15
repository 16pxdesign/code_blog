 <form>
          <div class="grid">
            <input type="text" name="firstname" placeholder="First name" aria-label="First name" required>
            <input type="email" name="email" placeholder="Email address" aria-label="Email address" required>
            <button type="submit">Subscribe</button>
          </div>
          <fieldset>
            <label for="terms">
              <input type="checkbox" role="switch" id="terms" name="terms">
              I agree to the <a href="#" onclick="event.preventDefault()">Privacy Policy</a>
            </label>
          </fieldset>
        </form>