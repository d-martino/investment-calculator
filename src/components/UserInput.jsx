export default function UserInput({input, onChangeUserInput}) {
    return (
       
            <section id="user-input">
                <div className="input-group">
                   <p>
                        <label>INITIAL INVESTMENT</label>
                        <input type="number" 
                            required 
                            value={input.initialInvestment}
                            onChange={(event)=> onChangeUserInput('initialInvestment', event.target.value)}>
                        </input>
                   </p>
                   <p>
                        <label>ANNUAL INVESTMENT</label>
                        <input type="number" 
                            required 
                            value={input.annualInvestment}
                            onChange={(event)=> onChangeUserInput('annualInvestment', event.target.value)}> 
                        </input>
                   </p>
                </div>
                <div className="input-group">
                   <p>
                        <label>EXPECTED RETURN</label>
                        <input type="number" 
                            required
                            value={input.expectedReturn}
                            onChange={(event)=> onChangeUserInput('expectedReturn', event.target.value)}>
                        </input>
                   </p>
                   <p>
                        <label>DURATION</label>
                        <input type="number" 
                            required
                            value={input.duration}
                            onChange={(event)=> onChangeUserInput('duration', event.target.value)}>
                        </input>
                   </p>
                </div>
            </section>
    
    );
}
