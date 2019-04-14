type t('options) = Js.t({..}) as 'options;

[@bs.module] external commander: t('options) = "";

let default = "commander";

let make = () => commander;

[@bs.send.pipe: t('options)] external usage: string => t('options) = "usage";

[@bs.send.pipe: t('options)]
external version: string => t('options) = "version";

[@bs.send.pipe: t('options)]
external option:
  (string, string, Js.Nullable.t(string) => 'output, string) => t('options) =
  "option";

[@bs.send.pipe: t('options)]
external option_b:
  (string, string, Js.Nullable.t(string) => bool, bool) => t('options) =
  "option";

[@bs.send.pipe: t('options)]
external parse: array(string) => t('options) = "parse";

[@bs.send.pipe: t('options)]
external outputHelp: unit => t('options) = "outputHelp";