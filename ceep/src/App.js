
import { ListaDeNotas } from "./components/listaDeNotas/listaDeNotas"
import { FormList } from "./components/formList/formList"
import "./assets/app.css"
import "./assets/reset.css"

function App() {
  return (
    <section>
      <FormList/>
      <ListaDeNotas/>
    </section>
  );
}

export default App;
