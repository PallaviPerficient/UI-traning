package com.adobe.aem.guides.wknd.spa.react.core.models;
import com.adobe.cq.export.json.ComponentExporter;

public interface TodaysHighlight extends ComponentExporter  {
    public String getHighlightTitle();
    public String getHighlightheading();
    public String getHighlightDescription();
    public String getHighlightRedirection();
    public String getHighlightImage();
    public String getHighlighturltext();
}
