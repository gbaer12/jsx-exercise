function App() {
    return (
        <div>
            <Tweet
            name="John Wayne"
            username="BigWayne"
            date={new Date().toDateString()}
            message="Whoa, take'er easy there, Pilgrim." />

            <Tweet
            name="Wayne Gretzky"
            username="MediumWayne"
            date={new Date().toDateString()}
            message="I skate to where the puck is going to be, not where it has been." />

            <Tweet
            name="Lil Wayne"
            username="lilWayne"
            date={new Date().toDateString()}
            message="Thankfully, there's no rehab for success." />
        </div>
    );
}