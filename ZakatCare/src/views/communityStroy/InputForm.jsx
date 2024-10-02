function InputForm() {
    return (<>
        <div class="col-md-7 col-lg-8">
            <form class="needs-validation" novalidate="">
                <div className="mb-3">
                    <label htmlFor="comment" className="form-label">Comment</label>
                    <textarea
                        className="form-control"
                        placeholder="Your Comment"
                        name="comment"
                        id="comment"
                        rows="7"
                        cols="25"
                        required
                    ></textarea>
                </div>
                <div class="col-12 mb-3">
                    <label for="username" class="form-label">Username</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text">@</span>
                        <input type="text" class="form-control" id="username" placeholder="Username" required="" />

                    </div>
                </div>

                <div class="col-12 mb-3">
                    <label for="email" class="form-label">Email <span class="text-body-secondary">(Optional)</span></label>
                    <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                </div>
                <button type="submit" className="btn btn-danger">Submit</button>
            </form>

        </div>
    </>)
}

export default InputForm;

