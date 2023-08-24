import { Header } from "./components/Header";
import { MainArticle } from "./components/MainArticle";
import { NewContainer } from "./components/NewContainer";
import { ItemsContainer } from "./components/ItemsContainer";

function App() {
  return (
    <main className="px-4 pt-6">
      <Header />
      <div className="md:flex md:gap-8 md:mb-10">
        <MainArticle/>
        <NewContainer />
      </div>
      <ItemsContainer/>
    </main>
  );
}

export default App;
