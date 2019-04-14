[@bs.module "chalk"] external chalk: unit => unit = "chalk";

type code2subl = {
  .
  "save": bool,
  "directory": string,
  [@bs.meth] "outputHelp": unit => unit,
};

let () = {
  let parseSave = (saveOpt: Js.Nullable.t(string)) => {
    let optionName = Js.Nullable.toOption(saveOpt);
    switch (optionName) {
    | None => true
    | Some(s) => bool_of_string(s)
    };
  };

  let parseDirectory = (directory: Js.Nullable.t(string)) => {
    let optionName = Js.Nullable.toOption(directory);
    switch (optionName) {
    | None => "themes"
    | Some(dir) => dir
    };
  };

  let version = [%bs.raw {| require('../package').version |}];

  let program: code2subl =
    Commander.make()
    |> Commander.version(version)
    |> Commander.usage("<repo-url> [options]")
    |> Commander.option_b(
         "-S, --save",
         "Install theme into Sublime Text",
         parseSave,
         false,
       )
    |> Commander.option(
         "-d, --directory [name]",
         "Overwrite directory containing the themes",
         parseDirectory,
         "themes",
       )
    |> Commander.parse(Node.Process.argv);

  let args = Util.drop(2, ArrayLabels.to_list(Node.Process.argv));
  if (Util.len(args) == 0) {
    Js.log("TEst");
  };
};