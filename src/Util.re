type userInfo = {. "username": string};

[@bs.module "os"] external userInfo: unit => userInfo = "userInfo";
[@bs.module "os"] external tmpDir: unit => string = "tmpDir";
[@bs.module "os"] external platform: unit => string = "platform";
[@bs.module "fs"] external remove: string => Js.Promise.t(unit) = "remove";

let getUsername = () => userInfo()##username;

let rec drop = (~count, theList: list('a)) =>
  switch (theList) {
  | [] => []
  | l when count <= 0 => l
  | [_, ...tail] => drop(~count=count - 1, tail)
  };

let rec len = (myList: list('a)) =>
  switch (myList) {
  | [] => 0
  | [_, ...tail] => 1 + len(tail)
  };

let getSublimeTextPackageDir = () => {
  let username = getUsername();
  switch (platform()) {
  | "win32" => "%APPDATA%/Roaming/Sublime Text 3/Packages/"
  | "darwin" => {j|/Users/$(username)/Library/Application Support/Sublime Text 3/Packages/|j}
  | _ => {j|/$(username)/.config/sublime-text-3/Packages/|j}
  };
};

let createTempDir = () => {
  let dir = Node.Path.join2(tmpDir(), "theme-converter");
  remove(dir)
  |> Js.Promise.then_(() => Js.Promise.resolve(dir))
  |> Js.Promise.catch(err => {
       Js.log2("Couldn't remove directory!", err);
       Js.Promise.reject(Failure("error"));
     });
};