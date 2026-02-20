import json
import re
from pathlib import Path
import sys


def load_projects(js_path: Path):
    text = js_path.read_text(encoding='utf-8')

    # Find the projects array assignment: const projects = [ ... ]
    m = re.search(r'const\s+projects\s*=\s*(\[[\s\S]*\])', text)
    if not m:
        raise ValueError('Could not find projects array in projects.js')

    array_text = m.group(1)

    try:
        projects = json.loads(array_text)
    except json.JSONDecodeError as e:
        raise ValueError(f'Failed to parse JSON from projects.js: {e}')

    return projects


def slugify(s: str) -> str:
    s = s.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = re.sub(r"-+", "-", s)
    return s.strip('-')


def make_readme(projects):
    # releaseyear == 0 means incomplete
    completed = [p for p in projects if p.get('releaseyear', 0) != 0]
    incomplete = [p for p in projects if p.get('releaseyear', 0) == 0]

    lines = []
    lines.append('# Welcome')
    lines.append('')
    lines.append('Explore my collection of projects. Most of my work is not shared publicly. This collection does not comprehensively represent my work.')
    lines.append('')
    lines.append('1. [Completed Projects](#complete)')
    for p in completed:
        name = p.get('name', 'Unnamed')
        anchor = slugify(name)
        lines.append(f'    * [{name}](#{anchor})')
    lines.append('2. [Incomplete Projects](#incomplete)')
    for p in incomplete:
        name = p.get('name', 'Unnamed')
        anchor = slugify(name)
        lines.append(f'    * [{name}](#{anchor})')
    lines.append('3. [Credits](#credits)')
    lines.append('')

    lines.append('')
    lines.append('## Completed Projects <a name="complete"></a>')
    lines.append('')

    for p in completed:
        name = p.get('name', 'Unnamed')
        link = p.get('link', '')
        thumb = p.get('thumbnail', '')
        desc = p.get('description', '')
        features = p.get('features', [])
        anchor = slugify(name)

        lines.append(f"### [{name}]({link}) <a name=\"{anchor}\"></a>")
        if thumb:
            lines.append(f'![{name}]({thumb} "{name}")')
        lines.append(desc)
        lines.append('')
        for feat in features:
            lines.append(f'- [x] {feat}')
        lines.append('')

    lines.append('## Incomplete Projects <a name="incomplete"></a>')
    lines.append('')
    for p in incomplete:
        name = p.get('name', 'Unnamed')
        link = p.get('link', '')
        anchor = slugify(name)
        lines.append(f'### [{name}]({link}) <a name="{anchor}"></a>')
        lines.append('PLAYABLE DEMO.')
        lines.append('')

    lines.append('## Credits <a name="credits"></a>')
    lines.append('')

    # Collect and print credits per project
    def credits_valid(credits):
        if not credits:
            return False
        if isinstance(credits, list):
            cleaned = [str(c).strip() for c in credits if str(c).strip()]
            if not cleaned:
                return False
            if len(cleaned) == 1 and cleaned[0].upper() == 'TODO':
                return False
            return True
        return False

    any_credits = False
    for p in projects:
        credits = p.get('credits', [])
        if credits_valid(credits):
            any_credits = True
            pname = p.get('name', 'Unnamed')
            lines.append(f'### {pname}')
            for c in credits:
                cstr = str(c).strip()
                if not cstr or cstr.upper() == 'TODO':
                    continue
                lines.append(f'- {cstr}')
            lines.append('')

    if not any_credits:
        lines.append('Project credits and assets go here.')
        lines.append('')

    return '\n'.join(lines)


def main():
    repo_root = Path(__file__).resolve().parent
    projects_js = repo_root / 'js' / 'projects.js'
    if not projects_js.exists():
        print('Error: js/projects.js not found', file=sys.stderr)
        sys.exit(2)

    projects = load_projects(projects_js)

    readme = make_readme(projects)

    readme_path = repo_root / 'README.md'
    readme_path.write_text(readme, encoding='utf-8')
    print(f'Wrote {readme_path}')


if __name__ == '__main__':
    main()