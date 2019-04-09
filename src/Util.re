type userInfo = {. "username": string};

[@bs.module "os"] external userInfo: unit => userInfo = "userInfo";
[@bs.module "os"] external tmpDir: unit => string = "tmpDir";
[@bs.module "os"] external platform: unit => string = "platform";
[@bs.module "fs"] external remove: string => Js.Promise.t(unit) = "remove";

let getUsername = () => userInfo()##username;

let getSublimeTextPackageDir = () => {
  let username = getUsername();
  switch (platform()) {
  | "win32" => "%APPDATA%/Roaming/Sublime Text 3/Packages/"
  | "darwin" => {j|/Users/$(username)/Library/Application Support/Sublime Text 3/Packages/|j}
  | _ => {j|/$(username)/.config/sublime-text-3/Packages/|j}
  };
};

let createTempDir = (~dirName="theme-converter", ()) => {
  let dir = Node.Path.join2(tmpDir(), dirName);
  remove(dir)
  |> Js.Promise.then_(() => Js.Promise.resolve(dir))
  |> Js.Promise.catch(err => {
    Js.log2("Couldn't remove directory!", err);
    Js.Promise.reject(Failure("error"));
  });
};