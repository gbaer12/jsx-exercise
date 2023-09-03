const MAX_NAME_LENGTH_TO_SHOW = 6;

/** Info on a single person
 * 
 * Props:
 * -name
 * -age
 * -hobbies: array
 */

const Person = (props) => {
    const voteText = age >= 18 ? "Go vote!" : "Go study!";

    const hobbiesLIs = hobbies.map(hobby => <li>{props.hobby}</li>);

    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {props.name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</li>
                <li>Age: {props.age}</li>
                <ul>
                    Hobbies:
                    {hobbiesLIs}
                </ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    );
}