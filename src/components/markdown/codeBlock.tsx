"use client";
import { useState, useEffect } from "react";
import { CopyButton } from "../copyBtn";
import {
  IoLogoJavascript,
  IoLogoCss3,
} from "react-icons/io5";
import {
  BiLogoTypescript,
} from "react-icons/bi";
import {
  FaReact,
  FaPython,
  FaRust,
  FaGolang,
  FaPhp,
  FaHtml5,
  FaJava,
  FaSwift,
  FaDartLang
} from "react-icons/fa6";
import {
  TbBrandCpp,
  TbBrandKotlin,
  TbBrandSvelte,
  TbBrandVue,
  TbBrandAstro,
  TbBrandPowershell,
  TbBrandTerraform,
  TbSql,
  TbBrandCSharp,
} from "react-icons/tb";
import {
  SiLua,
  SiRuby,
  SiScala,
  SiElixir,
  SiHaskell,
  SiClojure,
  SiPerl,
  SiR,
  SiJulia,
  SiZig,
  SiAssemblyscript,
  SiSolidity,
  SiGraphql,
  SiJson,
  SiYaml,
  SiToml,
  SiMarkdown,
  SiLatex,
  SiDocker,
  SiGnubash,
  SiSass,
  SiWebassembly,
  SiNim,
  SiProtodotio,
  SiXml,
} from "react-icons/si";
import {
  DiRuby,
} from "react-icons/di";
import {
  VscCode,
} from "react-icons/vsc";

const LANG_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  // JavaScript / TypeScript
  js:         IoLogoJavascript,
  javascript: IoLogoJavascript,
  jsx:        FaReact,
  ts:         BiLogoTypescript,
  typescript: BiLogoTypescript,
  tsx:        FaReact,

  // Web
  css:        IoLogoCss3,
  scss:       SiSass,
  sass:       SiSass,
  less:       SiSass,        
  html:       FaHtml5,
  xml:        SiXml,
  svg:        SiXml,
  vue:        TbBrandVue,
  svelte:     TbBrandSvelte,
  astro:      TbBrandAstro,
  python:     FaPython,
  py:         FaPython,
  rust:       FaRust,
  rs:         FaRust,
  go:         FaGolang,
  golang:     FaGolang,
  cpp:        TbBrandCpp,
  c:          TbBrandCpp,
  cs:         TbBrandCSharp,
  csharp:     TbBrandCSharp,
  zig:        SiZig,
  wasm:       SiWebassembly,
  asm:        SiAssemblyscript,
  java:       FaJava,
  kotlin:     TbBrandKotlin,
  kt:         TbBrandKotlin,
  scala:      SiScala,
  php:        FaPhp,
  rb:         DiRuby,
  ruby:       DiRuby,
  lua:        SiLua,
  pl:         SiPerl,
  perl:       SiPerl,
  r:          SiR,
  swift:      FaSwift,
  dart:       FaDartLang,
  ex:         SiElixir,
  exs:        SiElixir,
  elixir:     SiElixir,
  hs:         SiHaskell,
  haskell:    SiHaskell,
  clj:        SiClojure,
  cljs:       SiClojure,
  erl:        VscCode, 
  jl:         SiJulia,
  julia:      SiJulia,
  nim:        SiNim,
  m:          VscCode, 
  sh:         SiGnubash,
  bash:       SiGnubash,
  zsh:        SiGnubash,
  fish:       SiGnubash,
  ps1:        TbBrandPowershell,
  powershell: TbBrandPowershell,
  sql:        TbSql,
  graphql:    SiGraphql,
  gql:        SiGraphql,
  proto:      SiProtodotio,
  json:       SiJson,
  yaml:       SiYaml,
  yml:        SiYaml,
  toml:       SiToml,
  ini:        VscCode,
  env:        VscCode,
  dockerfile: SiDocker,
  tf:         TbBrandTerraform,
  md:         SiMarkdown,
  mdx:        SiMarkdown,
  tex:        SiLatex,
  sol:        SiSolidity,
  default:    VscCode,
};

const LANG_NAMES: Record<string, string> = {
  js:         "JavaScript",
  javascript: "JavaScript",
  jsx:        "JavaScript (JSX)",
  ts:         "TypeScript",
  typescript: "TypeScript",
  tsx:        "TypeScript (TSX)",
  css:        "CSS",
  scss:       "SCSS",
  sass:       "Sass",
  less:       "Less",
  html:       "HTML",
  xml:        "XML",
  svg:        "SVG",
  vue:        "Vue",
  svelte:     "Svelte",
  astro:      "Astro",
  py:         "Python",
  python:     "Python",
  rs:         "Rust",
  rust:       "Rust",
  go:         "Go",
  golang:     "Go",
  php:        "PHP",
  cpp:        "C++",
  c:          "C",
  cs:         "C#",
  csharp:     "C#",
  zig:        "Zig",
  wasm:       "WebAssembly",
  asm:        "Assembly",
  java:       "Java",
  kt:         "Kotlin",
  kotlin:     "Kotlin",
  scala:      "Scala",
  rb:         "Ruby",
  ruby:       "Ruby",
  lua:        "Lua",
  pl:         "Perl",
  perl:       "Perl",
  r:          "R",
  swift:      "Swift",
  dart:       "Dart",
  ex:         "Elixir",
  exs:        "Elixir Script",
  elixir:     "Elixir",
  hs:         "Haskell",
  haskell:    "Haskell",
  clj:        "Clojure",
  cljs:       "ClojureScript",
  erl:        "Erlang",
  jl:         "Julia",
  julia:      "Julia",
  nim:        "Nim",
  m:          "MATLAB",
  sh:         "Shell",
  bash:       "Bash",
  zsh:        "Zsh",
  fish:       "Fish",
  ps1:        "PowerShell",
  powershell: "PowerShell",
  sql:        "SQL",
  graphql:    "GraphQL",
  gql:        "GraphQL",
  proto:      "Protobuf",
  json:       "JSON",
  yaml:       "YAML",
  yml:        "YAML",
  toml:       "TOML",
  ini:        "INI",
  env:        "Dotenv",
  dockerfile: "Dockerfile",
  tf:         "Terraform",
  md:         "Markdown",
  mdx:        "MDX",
  tex:        "LaTeX",
  sol:        "Solidity",
};

export function CodeBlock({ code, lang }: { code: string; lang: string }) {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    import("shiki")
      .then(({ codeToHtml }) =>
        codeToHtml(code, {
          lang: lang || "text",
          theme: "github-dark-default", // give that github feel
          transformers: [
            {
              pre(node) {
                node.properties.style = node.properties.style
                  ?.toString()
                  .replace(
                    /background-color:[^;]+;?/,
                    "background-color: transparent;",
                  );
              },
            },
          ],
        }),
      )
      .then(setHtml);
  }, [code, lang]);

  const LangIcon = LANG_ICONS[lang?.toLowerCase()];

  return (
    <div className="my-4 group relative rounded-xl overflow-hidden border border-zinc-200/20">
      <div className="flex items-center justify-between px-4 py-2 ">
        <div className="flex items-center">
          <div className="flex"></div>
          {LangIcon && <LangIcon size={18} className="text-white mx-1" />}
          {lang && (
            <span className="text-xs font-medium text-white tracking-wider">
              {LANG_NAMES[lang?.toLowerCase()] || lang}
            </span>
          )}
        </div>
        <CopyButton code={code} />
      </div>
      {html ? (
        <div
          className="[&>pre]:p-4 [&>pre]:overflow-x-auto [&>pre]:text-xs [&>pre]:leading-relaxed [&>pre]:m-0 [&>pre]:font-mono"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre className="p-4 overflow-x-auto text-xs leading-relaxed m-0 font-mono text-zinc-400">
          {code}
        </pre>
      )}
    </div>
  );
}
