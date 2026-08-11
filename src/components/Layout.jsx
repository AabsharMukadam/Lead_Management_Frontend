import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />

      <div className="d-flex min-vh-100 bg-light">
        <Sidebar />

        <main className="flex-grow-1 p-4">
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;
