// App.jsx

function App() {
  return (
    <div
      style={{
        backgroundColor: "#eefaf1",
        minHeight: "100vh",
        textAlign: "center",
        paddingTop: "40px",
      }}
    >
      <h1>My Favourite Nature Gallery</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            width: "180px",
            border: "1px solid gray",
            borderRadius: "10px",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Mountain"
            style={{
              width: "100%",
              height: "140px",
            }}
          />

          <p>Mountain View</p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            width: "180px",
            border: "1px solid gray",
            borderRadius: "10px",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b"
            alt="Forest"
            style={{
              width: "100%",
              height: "140px",
            }}
          />

          <p>Green Forest</p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            width: "180px",
            border: "1px solid gray",
            borderRadius: "10px",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Waterfall"
            style={{
              width: "100%",
              height: "140px",
            }}
          />

          <p>Waterfall</p>
        </div>
      </div>
    </div>
  );
}

export default App;
