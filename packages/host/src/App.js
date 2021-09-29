import React, { Suspense } from "react";

const AppFirst = React.lazy(() => import("app1/AppFirst"));

const App = () => {
  return (
    <div>
      <h1>Host App!</h1>
      <Suspense fallback={"loading..."}>
            <AppFirst />
      </Suspense>
    </div>
  )
}

export default App;