import React from 'react';

function Login() {
    return (
        <div>
            <form>
            <div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="card shadow-lg rounded-4">
                <div className="card-body p-4">
                    <h2 className="text-center mb-4">Login</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Your Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

            </form>
        </div>
    );
}

export default Login;
