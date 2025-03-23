import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      return { count: state.count + 1 };
    }
    case "SUBTRACT": {
      return { count: state.count - 1 };
    }

    case "RESTART": {
      return { count: 0 };
    }

    default: {
      console.log("Error occured");
    }
  }
}

function About() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <main className="container mx-auto" style={{ height: "100vh" }}>
      <section className="container mx-auto mt-20">
        <h1 className="text-5xl text-green-800 font-bold">{state.count}</h1>
        <span className="flex gap-1.5 mt-5">
          <button
            onClick={() => dispatch({ type: "ADD" })}
            className="bg-green-800 rounded px-4 py-1 text-green-50 font-bold hover:bg-green-700 hover:text-green-200 cursor-pointer"
          >
            Increase
          </button>
          <button
            onClick={() => dispatch({ type: "SUBTRACT" })}
            className="bg-green-800 rounded px-4 py-1 text-green-50 font-bold hover:bg-green-700 
        hover:text-green-200 cursor-pointer"
          >
            Decrease
          </button>
          <button
            onClick={() => dispatch({ type: "RESTART" })}
            className="bg-green-800 rounded px-4 py-1 text-green-50 font-bold hover:bg-green-700 
            hover:text-green-200 cursor-pointer"
          >
            Reset
          </button>
        </span>
        <h2 className="mb-4 text-green-800 text-2xl font-semibold mt-10">
          About CNED Pets
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
          distinctio dolores id fuga porro nobis. In ex voluptatum fuga soluta
          est nihil enim autem! Reiciendis consequatur sunt quae qui cum
          sapiente deserunt odit inventore totam. Iusto, architecto blanditiis
          quibusdam error porro eum dolor officia repudiandae, ex numquam
          molestiae, eius et.
        </p>
      </section>
    </main>
  );
}

export default About;
