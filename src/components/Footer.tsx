import { T } from "gt-next";

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-[#A0A0A0] py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <T>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Atelier Home</h3>
              <p className="text-sm leading-relaxed">
                Thoughtfully designed furniture for modern living. Every piece is crafted from sustainable materials with an emphasis on quality and longevity.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Design Resources</h3>
              <ul className="text-sm space-y-2">
                <li><a href="https://www.hermanmiller.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A96E] transition-colors">Herman Miller</a></li>
                <li><a href="https://www.dwr.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A96E] transition-colors">Design Within Reach</a></li>
                <li><a href="https://www.dezeen.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A96E] transition-colors">Dezeen</a></li>
                <li><a href="https://www.architecturaldigest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A96E] transition-colors">Architectural Digest</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">About This Demo</h3>
              <p className="text-sm leading-relaxed">
                This is an example application built with{" "}
                <a href="https://generaltranslation.com" target="_blank" rel="noopener noreferrer" className="text-[#C9A96E] hover:underline">General Translation</a>{" "}
                to demonstrate internationalization. It is not a real store or service.
              </p>
            </div>
          </div>
        </T>
      </div>
    </footer>
  );
}
